const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1234567",
  database: "diarybook",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
