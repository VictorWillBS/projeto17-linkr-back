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

async function postMetadata(url, title, description, image){
  return connection.query(`
    INSERT INTO metadatas (
      url, title, description, image
    ) VALUES (
      $1, $2, $3, $4
    )
  `, [
    url, title, description, image
  ]);
}

async function getPostsbyUserId(userId, offSet) {
  return connection.query(`
    SELECT
      posts."userId" AS "userId",
      posts.content AS "postContent",
      posts.url AS url,
      metadatas.title AS "urlTitle",
      metadatas.description AS "urlDescription",
      metadatas.image AS "urlImage"
    FROM posts
    JOIN metadatas ON
    posts.url = metadatas.url
    WHERE "userId" = $1
    ORDER BY posts."createdAt"
    DESC LIMIT 20
    OFFSET $2
  `, [
    userId, offSet
  ]);
}

async function getMetadatas() {
  return connection.query(`
    SELECT * FROM metadatas
  `, [url]);
}

const postRepository = {
  postPublicationUrl,
  postPublicationFull,
  postMetadata,
  getPostsbyUserId,
  getMetadatas
};

export default postRepository;
