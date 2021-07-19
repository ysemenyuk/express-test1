import db from '../dbConfig.js';

const Lesson = db.Lesson;

const getAll = async ({ logger }) => {
  logger('lesson.controller GET /lessons/');
  return await Lesson.findAll();
};

export default { getAll };
