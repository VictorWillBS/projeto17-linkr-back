import connection from "../dbstrategy/postgres.js";

async function getAllLikes (postId){
  return connection.query(`
    SELECT 
      likes."postIdLike" as "postId",
      "users"."userName"  as "name",
      "users"."id" as "userId"
    FROM likes
    JOIN users ON
    "users"."id" = "likes"."userIdLike"
    WHERE likes."postIdLike" = $1
  `,[postId]);
}

async function postLike (postId,userId){
  return connection.query(`
  INSERT INTO likes
  ("postIdLike","userIdLike") 
  VALUES ($1,$2)
  `,[postId,userId]);
}

async function deleteLike (postId,userId){
  return connection.query(`
   DELETE FROM likes
   WHERE likes."postIdLike" = $1 and "likes"."userIdLike"=$2
  `,[postId,userId]);
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
  getAllLikes,
  postLike,
  deleteLike,
  getLike,
  getLikePostId,
};

export default likeRepository;

