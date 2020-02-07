const mysql = require('mysql2');
const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'blog',

}).promise();

module.exports = connection;
