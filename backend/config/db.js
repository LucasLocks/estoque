const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', //sua senha mysql
  database: 'estoque'
});

module.exports = db;