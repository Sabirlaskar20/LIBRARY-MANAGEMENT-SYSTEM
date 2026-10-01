import 'dotenv/config';
import app from './app.js';
import { connectDatabase } from './config/database.js';

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  connectDatabase()
    .then(() => app.listen(port, () => console.log(`Server listening on port ${port}`)))
    .catch((error) => {
      console.error('Unable to start server:', error.message);
      process.exitCode = 1;
    });
}

export default app;
