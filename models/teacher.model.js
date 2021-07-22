import pkg from 'objection';
const { Model } = pkg;
import path from 'path';

export default class Teacher extends Model {
  static get tableName() {
    return 'teachers';
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
        modelClass: 'Lesson',
        // modelClass: path.join(path.resolve(), 'models', 'lesson.model.js'),

        join: {
          from: 'teacher.id',
          through: {
            from: 'lessons_teachers.teacher_id',
            to: 'lessons_teachers.lesson_id',
          },
          to: 'lesson.id',
        },
      },
    };
  }
}
