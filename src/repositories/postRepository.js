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

async function postMetadata(url, title, description, image) {
  return connection.query(
    `
    INSERT INTO metadatas (
      url, title, description, image
    ) VALUES (
      $1, $2, $3, $4
    )
  `,
    [url, title, description, image]
  );
}

async function getPosts() {
  return connection.query(
    `
    SELECT
      posts."userId" AS "userId",
      users."userName" AS "userName",
      users.image AS "userImage",
      posts.content AS "postContent",
      posts.url AS url,
      metadatas.id AS "urlId",
      metadatas.title AS "urlTitle",
      metadatas.description AS "urlDescription",
      metadatas.image AS "urlImage"
    FROM posts
    JOIN metadatas ON
    posts.url = metadatas.url
    JOIN users ON
    posts."userId" = users.id
    ORDER BY posts."createdAt"
    DESC LIMIT 20
  `);
}

async function getMetadatas() {
  return connection.query(`
    SELECT * FROM metadatas
  `);
}

const postRepository = {
  postPublicationUrl,
  postPublicationFull,
  postMetadata,
  getPosts,
  getMetadatas,
};

export default postRepository;
