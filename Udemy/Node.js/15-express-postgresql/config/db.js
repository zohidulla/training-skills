const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1234567",
  database: "user_list",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
