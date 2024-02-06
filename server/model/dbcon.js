const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Tushar@123",
  host: "localhost",
  port: "5432",
  database: "student_admin",
});

module.exports = pool;
