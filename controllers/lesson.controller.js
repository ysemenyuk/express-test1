import lessonRepository from '../repositories/lesson.repository.js';

const getAllByParams = async ({ logger, params }) => {
  logger('lesson.controller getAll');
  return await lessonRepository.getAllByParams({ logger, params });
};

const createOne = async ({ logger, payload }) => {};

export default { getAllByParams, createOne };
