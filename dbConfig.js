import { Sequelize } from 'sequelize';

import Lesson from './models/lesson.model.js';

const sequelize = new Sequelize('test_db', 'root', 'root', {
  logging: console.log,
  host: 'localhost',
  dialect: 'postgres',
  port: 5438,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Lesson = Lesson(sequelize);

export default db;
