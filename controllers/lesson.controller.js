import db from '../dbConfig.js';

const { Lesson, Student, Teacher } = db;

const getAll = async ({ logger }) => {
  logger('lesson.controller GET /lessons/');
  return await Lesson.findAll({
    include: [
      { model: Student, through: { attributes: ['visit'] } },
      { model: Teacher, through: { attributes: [] } },
    ],
  });
};

const createOne = async ({ logger, payload }) => {
  logger('lesson.controller POST /lessons/');
  const { title } = payload;
  return await Lesson.create({ title, date: Date.now() });
};

export default { getAll, createOne };
