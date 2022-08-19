import connection from "../dbstrategy/postgres.js";

async function post(userId, postId) {
  return connection.query(
    `
    INSERT INTO reposts ("userId", "postId")
    VALUES ($1, $2)
  `,
    [userId, postId]
  );
}

const repostRepository = {
  post,
};

export default repostRepository;
