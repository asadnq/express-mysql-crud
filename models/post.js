const db = require('../database/db');

const create = async (body) => {
  db.config.namedPlaceholders = true;
  const { title, content } = body;
  const [
    post,
  ] = await db.execute(
    'INSERT INTO posts SET title = :title, content = :content',
    { title, content },
  );

  const [createdPost] = await db.execute('SELECT * FROM posts where id = :id', {
    id: post.insertId,
  });

  return createdPost[0];
};

const findAll = async () => {
  const [posts] = await db.execute('SELECT * FROM posts');

  return posts;
}

module.exports = {
  create,
  findAll
};
