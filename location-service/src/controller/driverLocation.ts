import {getRedisClient } from '../config/redisConfig.js';
import { getChannel } from '../config/rabbitMQConfig.js';
import type { DriverLocationRequest } from '../interface/locationInterface.js';
import axios from 'axios';


const LOCATION_KEY = 'driver_location';
const DRIVE_KEY = 'driver_active';

const updateDriverLocation = async () => {
    const client = getRedisClient();
    const channel = getChannel();

    channel.consume('driver_location_update', async (msg: any) => {
        if (msg) {
            console.log(msg);
            const { driverId, latitude, longitude }: DriverLocationRequest = JSON.parse(msg.content.toString());
            try {
                if (driverId || latitude || longitude) {
                    {
                        await axios.patch(`http://localhost:3001/api/users/driver/status/active/${driverId}`);
                    }
                    const isDriverActive = await client.set(`${DRIVE_KEY}:${driverId}`, true, {
                        EX: 900,
                    });
                    if (!isDriverActive) {
                        {
                            await axios.patch(`http://localhost:3001/api/users/driver/status/inactive/${driverId}`);
                        }
                    }
                    await client.set(`${LOCATION_KEY}:${driverId}`, JSON.stringify({ latitude, longitude }), {
                        EX: 100
                    });
                }

            } catch (error) {
                console.error(error);
            }

        }
    });

}


