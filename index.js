import express from 'express';
import debug from 'debug';

import requestLogger from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

import lessonRouter from './routes/lesson.router.js';

import Knex from 'knex';
import knexConfig from './knexfile.js';
import pkg from 'objection';
const { Model } = pkg;

const knex = Knex(knexConfig.development);
Model.knex(knex);

const app = express();
const logger = debug('server');

app.use(express.json());

app.use(requestLogger);

app.use('/lessons', lessonRouter);

app.get('/', (req, res) => {
  res.json({ message: 'server is running..' });
});

app.use(errorHandler);

const PORT = 4000;
app.listen(PORT, () => {
  logger(`Server is running on port ${PORT}.`);
});
