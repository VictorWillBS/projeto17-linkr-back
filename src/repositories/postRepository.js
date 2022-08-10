import connection from "../dbstrategy/postgres.js";

async function postPublicationUrl(userId, url) {
  return connection.query(
    `
    INSERT INTO posts ("userId", url)
    VALUES ($1, $2)
  `,
    [userId, url]
  );
}

async function postPublicationFull(userId, url, content) {
  return connection.query(
    `
    INSERT INTO posts ("userId", url, content)
    VALUES ($1, $2, $3)
  `,
    [userId, url, content]
  );
}

async function getPosts(userId, offSet) {
  return connection.query(`
    SELECT * FROM posts
    WHERE "userId" = $1
    ORDER BY "createdAt"
    DESC LIMIT 20
    OFFSET $2
  `, [
    userId, offSet
  ]);
}

const postRepository = {
  postPublicationUrl,
  postPublicationFull,
  getPosts
};

export default postRepository;
