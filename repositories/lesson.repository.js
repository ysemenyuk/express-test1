import Lesson from '../models/lesson.model.js';
import knex from '../dbConfig.js';

const getAllByParams = async ({ logger, params }) => {
  logger('lesson.repository getAllbyParams');

  const filter = {
    dates: ['2019-08-01', '2019-09-01'],
    status: 1,
    teachers: [1, 4],
    studentsCount: 2,
  };

  return await Lesson.query()
    .select('lessons.*')
    // .count('lesson_students.student_id as studentsCount')
    // .select(knex.raw('COUNT(CASE WHEN visit = true THEN 1 END) as "visitCount"'))
    .select(knex.raw('COUNT(*) filter (where visit = true) as "visitCount"'))
    .leftJoin('lesson_students', 'lessons.id', 'lesson_students.lesson_id')
    .groupBy('lessons.id')
    .orderBy('id')
    .modify('filterByDate', filter.dates)
    .modify('filterByStatus', filter.status)
    .modify('filterByTeachers', filter.teachers)
    .modify('filterByStudentsCount', filter.studentsCount);
  // .withGraphFetched('[students, teachers]');

  // .having(knex.raw('COUNT(*) = ?', 2));
  // .whereBetween('date', ['2019-08-01', '2019-09-01'])
  // .where('status', 1)
  // .whereExists(knex.select('*')
  //     .from('lesson_teachers')
  //     .whereRaw('lesson_teachers.lesson_id = lessons.id')
  //     .whereIn('lesson_teachers.teacher_id', [1, 4])
  // );
};

const createOne = async ({ logger, payload }) => {};

export default { getAllByParams, createOne };
