import connection from "../dbstrategy/postgres.js";

async function postComment(content, postId, userId) {
  return connection.query(
    `
    INSERT INTO comments ("content", "postId", "userId")
    VALUES ($1, $2, $3)
  `,
    [content, postId, userId]
  );
}

async function getCountCommentById(postId) {
  return connection.query(
    `
    SELECT COUNT(comments."postId"), comments."postId" FROM comments
    WHERE comments."postId" = $1
    GROUP BY comments."postId";
  `,
    [postId]
  );
}

const commentRepository = {
  postComment,
  getCountCommentById,
};

export default commentRepository;
