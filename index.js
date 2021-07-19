import express from 'express';
import debug from 'debug';

import db from './dbConfig.js';
import requestLogger from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

import lessonRouter from './routes/lesson.router.js';

const app = express();
const logger = debug('server');

app.use(express.json());

app.use(requestLogger);

app.use('/lessons', lessonRouter);

app.get('/', (req, res) => {
  res.json({ message: 'server is running..' });
});

app.use(errorHandler);

try {
  await db.sequelize.authenticate();
  await db.sequelize.sync();
  logger('Connection has been established successfully.');
} catch (error) {
  logger('Unable to connect to the database:', error);
}

const PORT = 4000;
app.listen(PORT, () => {
  logger(`Server is running on port ${PORT}.`);
});
