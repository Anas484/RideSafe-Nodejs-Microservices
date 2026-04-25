import express from 'express';
import userAuthRoutes from './routes/userAuthRouter.js';
import userDriverRouter from './routes/userDriverRouter.js';
import jwtFilterMiddleware from './middleware/jwtFilterMiddleware.js';
import userDriverInternalRouter from './routes/userInternalRouter.js';
const app = express();
app.use(express.json());
app.use('/api/users/auth', userAuthRoutes);
app.use('/api/users/driver/internal', userDriverInternalRouter);
app.use('/api/users/driver', jwtFilterMiddleware, userDriverRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=index.js.map