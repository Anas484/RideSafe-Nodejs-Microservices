import express from 'express';
import userAuthRoutes from './routes/userAuthRoutes.js';
const app = express();
app.use(express.json());
app.use('/api/users/auth', userAuthRoutes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=index.js.map