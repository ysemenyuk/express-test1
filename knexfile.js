import path from 'path';

// const migrations = {
//   directory: path.join(__dirname, 'server', 'migrations'),
// };

export default {
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    // migrations,
  },
  development: {
    client: 'pg',
    connection: {
      user: 'root',
      password: 'root',
      database: 'test_db',
      host: 'localhost',
      port: '5438',
    },
    useNullAsDefault: true,
    // migrations,
  },
};
