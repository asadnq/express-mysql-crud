const db = require('../database/db');

const create = (body, callback) => {
  //const { title, content } = body;
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
    })
  });
};

module.exports = {
  create,
};
