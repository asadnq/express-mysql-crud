const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'blog',
});


connection.connect();


module.exports = connection;