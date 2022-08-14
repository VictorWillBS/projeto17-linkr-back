import connection from "../dbstrategy/postgres.js";

async function getAllLikes (postId){
  return connection.query(`
    SELECT 
      likes."postId" as "postId",
      "users"."userName"  as "name"
    FROM likes
    JOIN users ON
    "users"."id" = "likes"."userId"
    WHERE likes."postId" = $1
  `,[postId])
}

async function getUserLikes (userId){
  return connection.query(`
    SELECT 
      likes."postId" as "postId",
      "users"."userName"  as "name"
    FROM likes
    JOIN users ON
    "users"."id" = "likes"."userId"
    WHERE "likes"."userId"= $1
  `,[userId])
}

async function verifyUserLikedPost (postId,userId){
  return connection.query(`
  SELECT 
  likes."postId" as "postId",
  "users"."userName"  as "name"
FROM likes
JOIN users ON
"users"."id" = "likes"."userId"
WHERE likes."postId" = $1 and "likes"."userId"=$2
  `,[postId,userId])
}

async function postLike (postId,userId){
  return connection.query(`
    INSERT INTO likes
    (postId,userId) 
    VALUES ($1,$2)
  `,[postId,userId])
}

async function deleteLike (postId,userId){
  return connection.query(`
    DELETE likes
    WHERE likes."postId" = $1 and "likes"."userId"=$2
  `,[postId,userId])
}

const likeRepository = {
    getAllLikes,
    getUserLikes,
    verifyUserLikedPost,
    postLike,
    deleteLike
}

export default likeRepository