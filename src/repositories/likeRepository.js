import connection from "../dbstrategy/postgres.js";



// async function getUserLikes (userId){
//   return connection.query(`
//     SELECT 
//       likes."postId" as "postId",
//       "users"."userName"  as "name"
//     FROM likes
//     JOIN users ON
//     "users"."id" = "likes"."userId"
//     WHERE "likes"."userId"= $1
//   `,[userId])
// }

// async function verifyUserLikedPost (postId,userId){
//   return connection.query(`
//   SELECT 
//   likes."postId" as "postId",
//   "users"."userName"  as "name"
// FROM likes
// JOIN users ON
// "users"."id" = "likes"."userId"
// WHERE likes."postId" = $1 and "likes"."userId"=$2
//   `,[postId,userId])
// }



// const likeRepository = {
//     getAllLikes,
//     getUserLikes,
//     verifyUserLikedPost,
//     postLike,
//     deleteLike
// }

async function getAllLikes (postId){
  return connection.query(`
    SELECT 
      likes."postId" as "postId",
      "users"."userName"  as "name",
      "users"."id" as "userId"
    FROM likes
    JOIN users ON
    "users"."id" = "likes"."userId"
    WHERE likes."postId" = $1
  `,[postId]);
}

async function postLike (postId,userId){
  console.log(`post ${postId}\nuser ${userId}` )
  return connection.query(`
  INSERT INTO likes
  ("postId","userId") 
  VALUES ($1,$2)
  `,[postId,userId]);
}

async function deleteLike (postId,userId){
  return connection.query(`
   DELETE FROM likes
   WHERE likes."postId" = $1 and "likes"."userId"=$2
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

