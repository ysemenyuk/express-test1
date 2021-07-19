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

export default router;
