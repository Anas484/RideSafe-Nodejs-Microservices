import { getRedisClient } from '../config/redisConfig.js';
const getDriversNearby = async (req, res) => {
    const client = getRedisClient();
    try {
        const { latitude, longitude, radius } = req.body;
        const drivers = await client.geoSearch('driver_location', { longitude: latitude, latitude: longitude }, { radius: radius || 5, unit: 'km' });
        if (!drivers || drivers.length === 0) {
            return res.status(404).json({ message: 'No drivers found nearby' });
        }
        res.status(200).json({ drivers });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export { getDriversNearby };
//# sourceMappingURL=internalDriverController.js.map