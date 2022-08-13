import connection from "../dbstrategy/postgres.js";

async function getTagsRepository (){
    return await connection.query(`
    SELECT tags.id, name ,COUNT(tags.id) as "totalPosts"
    FROM "tags_Posts" 
    JOIN tags 
    ON tags.name= "tags_Posts"."tagName"  
    GROUP BY tags.id
    ORDER BY "totalPosts" DESC
    LIMIT 10`)
}

async function getPostByTag(hashtag){
    return await connection.query(
    ` SELECT
    posts."id" AS "postId",
    posts."userId" AS "userId",
    users."userName" AS "userName",
    users.image AS "userImage",
    posts.content AS "postContent",
    posts.url AS url,
    metadatas.id AS "urlId",
    metadatas.title AS "urlTitle",
    metadatas.description AS "urlDescription",
    metadatas.image AS "urlImage",
  JSON_AGG("tags_Posts"."tagName") AS "tags"
  FROM posts
  JOIN metadatas ON
  posts.url = metadatas.url
  JOIN users ON
  posts."userId" = users.id
  LEFT JOIN "tags_Posts" ON
  posts.id = "tags_Posts"."postId"
  WHERE "tags_Posts"."tagName" = $1
  GROUP BY posts.id,"userName","userImage","urlId","urlTitle","urlDescription","urlImage"
  ORDER BY posts."createdAt"
  DESC LIMIT 20
  
 `, [hashtag])
}



const tagRepository={
    getTagsRepository,
    getPostByTag,
};

export default tagRepository;

