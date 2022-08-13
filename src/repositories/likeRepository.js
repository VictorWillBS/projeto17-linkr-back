import connection from "../dbstrategy/postgres.js";

async function addLike(postIdLike, userIdLIke) {
  return connection.query(
    `
    INSERT INTO likes ("postIdLike", "userIdLike")
    VALUES ($1, $2)
  `,
    [postIdLike, userIdLIke]
  );
}

async function deleteLike(postIdLike, userIdLike) {
  return connection.query(
    `
    DELETE FROM likes
    WHERE "postIdLike" = $1 AND "userIdLike" = $2
  `,
    [postIdLike, userIdLike]
  );
}

async function getLike(postIdLike, userIdLike) {
  return connection.query(
    `
    SELECT * FROM likes
    WHERE "postIdLike" = $1 AND "userIdLike" = $2
  `,
    [postIdLike, userIdLike]
  );
}

async function getLikePostId(postLikeId) {
  return connection.query(
    `
    SELECT COUNT(likes.id), likes.* FROM likes
    WHERE "postIdLike" = $1
    GROUP BY likes.id
  `,
    [postLikeId]
  );
}

const likeRepository = {
  addLike,
  deleteLike,
  getLike,
  getLikePostId,
};

export default likeRepository;
