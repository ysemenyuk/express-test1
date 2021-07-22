import pkg from 'objection';
const { Model } = pkg;
import path from 'path';
import Lesson from './lesson.model.js';

export default class Student extends Model {
  static get tableName() {
    return 'students';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    return {
      lessons: {
        relation: Model.ManyToManyRelation,
        // modelClass: path.join(path.resolve(), 'models', 'lesson.model.js'),
        modelClass: Lesson,
        join: {
          from: 'students.id',
          through: {
            from: 'lesson_students.student_id',
            to: 'lesson_students.lesson_id',
          },
          to: 'lessons.id',
        },
      },
    };
  }
}
