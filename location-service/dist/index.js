import express from "express";
import { connectRedis } from './config/redisConfig.js';
import { connectRabbitMQ } from './config/rabbitMQConfig.js';
import startDriverLocationUpdateConsumer from './utils/driverLocationUpdateConsumer.js';
import geoCodeRouter from './routes/geoCodeRouter.js';
import internalDriverRouter from './routes/InternalDriverRouter.js';
const app = express();
app.use(express.json());
const startEssentialServices = async () => {
    await connectRedis();
    await connectRabbitMQ();
    await startDriverLocationUpdateConsumer();
};
startEssentialServices();
app.use('/api/location/', geoCodeRouter);
app.use('/api/internal/driver/', internalDriverRouter);
app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
//# sourceMappingURL=index.js.map