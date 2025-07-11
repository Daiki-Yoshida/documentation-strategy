// Example TypeScript file for demonstration
import express from 'express';
import { authRouter } from './routes/auth';
import { userRouter } from './routes/users';

const app = express();

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

export default app;