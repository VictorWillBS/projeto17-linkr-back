import connection from "../dbstrategy/postgres.js";

async function postComment(content, postId, userId) {
  return (
    connection.query`
    INSERT INTO comments ("content", "postId", "userId")
    VALUES ($1, $2, $3)
  `,
    [content, postId, userId]
  );
}

const commentRepository = {
  postComment,
};

export default commentRepository;
