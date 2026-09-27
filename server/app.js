import cors from 'cors';
import express from 'express';
import healthRoutes from './routes/health.routes.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/health', healthRoutes);

app.use((_request, response) => {
  response.status(404).json({ message: 'Route not found' });
});

export default app;
