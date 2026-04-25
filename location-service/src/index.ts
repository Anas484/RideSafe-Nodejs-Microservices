import express from "express";
import { connectRedis } from './config/redisConfig.js';
import { connectRabbitMQ } from './config/rabbitMQConfig.js';
import startDriverLocationUpdateConsumer from './utils/driverLocationUpdateConsumer.js';
import geoCodeRouter from './routes/geoCodeRouter.js';



const app = express();

const startEssentialServices = async () => {
    await connectRedis();
    await connectRabbitMQ();
    await startDriverLocationUpdateConsumer();
}

startEssentialServices();

app.use('/api/location/geocode', geoCodeRouter);

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});