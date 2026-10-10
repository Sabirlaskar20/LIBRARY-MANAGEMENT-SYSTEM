import cors from 'cors';
import express from 'express';
import healthRoutes from './routes/health.routes.js';
import bookRoutes from './routes/bookRoutes.js';
import { requestLogger } from './middleware/requestLogger.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());
app.use(requestLogger);

app.use('/api/health', healthRoutes);
app.use('/api/books', bookRoutes);

app.use((_request, response) => {
  response.status(404).json({ message: 'Route not found' });
});

export default app;