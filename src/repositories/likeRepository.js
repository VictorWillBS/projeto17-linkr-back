import connection from "../dbstrategy/postgres.js";

// <<<<<<< HEAD
// async function getAllLikes (postId){
//   return connection.query(`
//     SELECT 
//       likes."postId" as "postId",
//       "users"."userName"  as "name"
//     FROM likes
//     JOIN users ON
//     "users"."id" = "likes"."userId"
//     WHERE likes."postId" = $1
//   `,[postId])
// }

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

// async function postLike (postId,userId){
//   return connection.query(`
//     INSERT INTO likes
//     (postId,userId) 
//     VALUES ($1,$2)
//   `,[postId,userId])
// }

// async function deleteLike (postId,userId){
//   return connection.query(`
//     DELETE likes
//     WHERE likes."postId" = $1 and "likes"."userId"=$2
//   `,[postId,userId])
// }

// const likeRepository = {
//     getAllLikes,
//     getUserLikes,
//     verifyUserLikedPost,
//     postLike,
//     deleteLike
// }

// export default likeRepository
// =======
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
// >>>>>>> 85ecc916c2e47984ddb46471bf2a70bc9388cdff
