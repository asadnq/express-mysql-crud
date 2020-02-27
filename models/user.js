const db = require('../database/db');

const auth = (body, callback) => {
  const { username, password } = body;

  db.query(
    'SELECT * FROM users where username = ? and password = ?',
    [username, password],
    function(error, results) {
      callback(error, results[0]);
    },
  );
};

const create = (body, callback) => {
  const { username, password } = body;

  db.query('INSERT INTO users SET ?', { username, password }, (err, res) => {
    return callback(err, res);
  });
};

module.exports = {
  auth,
  create,
};
