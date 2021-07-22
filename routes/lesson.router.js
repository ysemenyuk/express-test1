import express from 'express';

import { asyncErrorHandler } from '../middlewares/errorHandler.middleware.js';
import lessonController from '../controllers/lesson.controller.js';

const router = express.Router();

router.get(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('lesson.router GET /lessons/');

    const lessons = await lessonController.getAll({
      logger: req.logger,
    });

    res.status(200).send(lessons);

    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('lesson.router POST /lessons/');

    const lesson = await lessonController.createOne({
      logger: req.logger,
      payload: req.body,
    });

    res.status(200).send(lesson);

    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

export default router;
