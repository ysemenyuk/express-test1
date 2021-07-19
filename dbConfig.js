import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;

// import initLesson from './models/lesson.model.js';

const sequelize = new Sequelize('test_db', 'root', 'root', {
  logging: console.log,
  host: 'localhost',
  dialect: 'postgres',
  port: 5438,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const Lesson = sequelize.define(
  'lesson',
  {
    title: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  { timestamps: false }
);

const Student = sequelize.define(
  'student',
  { name: DataTypes.STRING },
  { timestamps: false }
);
const Teacher = sequelize.define(
  'teacher',
  { name: DataTypes.INTEGER },
  { timestamps: false }
);

db.Lesson = Lesson;
db.Student = Student;
db.Teacher = Teacher;

Student.belongsToMany(Lesson, {
  through: 'lesson_students',
  foreignKey: 'student_id',
  otherKey: 'lesson_id',
  timestamps: false,
});

Lesson.belongsToMany(Student, {
  through: 'lesson_students',
  foreignKey: 'lesson_id',
  otherKey: 'student_id',
  timestamps: false,
});

Teacher.belongsToMany(Lesson, {
  through: 'lesson_teachers',
  foreignKey: 'teacher_id',
  otherKey: 'lesson_id',
  timestamps: false,
});

Lesson.belongsToMany(Teacher, {
  through: 'lesson_teachers',
  foreignKey: 'lesson_id',
  otherKey: 'teacher_id',
  timestamps: false,
});

export default db;
