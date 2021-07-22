import Lesson from '../models/lesson.model.js';
import Student from '../models/student.model.js';

const getAll = async ({ logger }) => {
  logger('lesson.controller GET /lessons/');

  const filter = {};

  return await Lesson.query()
    .select('lessons.*')
    .count('lesson_students.student_id as studentsCount')
    // .count('lesson_students.visit', '=', true)
    // .count('lesson_students.student_id as visitCount')
    // .where('lesson_students.visit', true)
    .leftJoin('lesson_students', 'lessons.id', 'lesson_students.lesson_id')
    // .leftJoin('students', 'students.id', 'lesson_students.student_id')
    .groupBy('lessons.id')
    .orderBy('id')
    .modify('filterDate', filter.dates)
    .modify('filterStatus', filter.status)
    .modify('filterTeachers', filter.teachers)
    .modify('filterStudentsCount', filter.studentsCount);

  // .withGraphFetched('[students, teachers]');

  // .having('studentsCount', '=', 3);
  // .whereBetween('date', ['2019-08-01', '2019-09-01'])
  // .where('status', 1)
  // .whereExists(function () {
  //   this.select('*')
  //     .from('lesson_teachers')
  //     .whereRaw('lesson_teachers.lesson_id = lessons.id')
  //     .whereIn('lesson_teachers.teacher_id', [1, 4]);
  // });
};

const createOne = async ({ logger, payload }) => {
  logger('lesson.controller POST /lessons/');
  const { title } = payload;
  // return await Lesson.create({ title, date: Date.now() });
};

export default { getAll, createOne };
