import pkg from 'objection';
const { Model } = pkg;
import path from 'path';

import Student from './student.model.js';
import Teacher from './teacher.model.js';

export default class Lesson extends Model {
  static get tableName() {
    return 'lessons';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
        date: { type: 'timestamp' },
        status: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    return {
      students: {
        relation: Model.ManyToManyRelation,
        // modelClass: path.join(path.resolve(), 'models', 'student.model.js'),
        modelClass: Student,
        join: {
          from: 'lessons.id',
          through: {
            from: 'lesson_students.lesson_id',
            to: 'lesson_students.student_id',
            extra: ['visit'],
          },
          to: 'students.id',
        },
      },
      teachers: {
        relation: Model.ManyToManyRelation,
        // modelClass: path.join(path.resolve(), 'models', 'teacher.model.js'),
        modelClass: Teacher,
        join: {
          from: 'lessons.id',
          through: {
            from: 'lesson_teachers.lesson_id',
            to: 'lesson_teachers.teacher_id',
          },
          to: 'teachers.id',
        },
      },
    };
  }
}
