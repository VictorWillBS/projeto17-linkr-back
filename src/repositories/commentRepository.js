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

async function getAllCommentsById(postId) {
  return connection.query(
    `
    SELECT users."userName", users.image, comments.* FROM comments
    JOIN users ON comments."userId" = users.id
    WHERE comments."postId" = $1 ORDER BY comments.id ASC
  `,
    [postId]
  );
}

const commentRepository = {
  postComment,
  getCountCommentById,
  getAllCommentsById,
};

export default commentRepository;
