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

const postRepository = {
  postPublicationUrl,
  postPublicationFull,
};

export default postRepository;
