import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { connectDatabase } from './config/db.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'library-management-server' });
});

app.use((_request, response) => {
  response.status(404).json({ message: 'Route not found' });
});

if (process.env.NODE_ENV !== 'test') {
  connectDatabase()
    .then(() => app.listen(port, () => console.log(`Server listening on port ${port}`)))
    .catch((error) => {
      console.error('Unable to start server:', error.message);
      process.exitCode = 1;
    });
}

export default app;
