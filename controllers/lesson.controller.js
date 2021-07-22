import Lesson from '../models/lesson.model.js';
import Student from '../models/student.model.js';

const getAll = async ({ logger }) => {
  logger('lesson.controller GET /lessons/');

  // return await Lesson.query()
  //   .select(
  //     'lessons.*',
  //     'lesson_students.student_id as studentsId',
  //     'students.name as studentName'
  //   )
  //   .join('lesson_students', 'lessons.id', 'lesson_students.lesson_id')
  //   .join('students', 'students.id', 'lesson_students.student_id');

  return await Lesson.query()
    .withGraphFetched('students')
    .modifiers({
      count: (query) => {
        query.select('visit');
      },
    });
};

const createOne = async ({ logger, payload }) => {
  logger('lesson.controller POST /lessons/');
  const { title } = payload;
  // return await Lesson.create({ title, date: Date.now() });
};

export default { getAll, createOne };
