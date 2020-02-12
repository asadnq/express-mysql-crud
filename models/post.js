const db = require('../database/db');

const store = (body, callback) => {
  db.query({
    sql: 'INSERT INTO posts SET ?',
    timeout: 4000,
    values: { ...body },
  }, (err, result) => {
    return callback(err, result);
  });
};

module.exports = {
  store,
};
/*const store = (body, callback) => {
  db.query({
    sql: 'INSERT INTO posts SET ?',
    timeout: 4000,
    values: { ...body },
  }, (err, result) => {
    if (err) {
      return callback(err, result);
    }

    db.query({
      sql: 'SELECT * FROM posts where id = ?',
      values: [result.insertId],
    }, function(err, result) {
      callback(err, result);
    });
  });
};*/

const findAll = (callback) => {
  db.query('SELECT * FROM POSTS', (err, result) => {
    callback(err, result);
  });
}

const findOne = (id, callback) => {
  db.query('SELECT * FROM POSTS where id = ?', [id], (err, result) => {
    callback(err, result[0]);
  });
}

module.exports = {
  store,
  findAll,
  findOne,
};
