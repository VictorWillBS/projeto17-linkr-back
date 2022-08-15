import connection from "../dbstrategy/postgres.js";

async function getUsersList() {
    return connection.query(`
        SELECT
            id, "userName", image
        FROM users
    `);
}

async function getUserId(userId) {
    return connection.query(`
        SELECT * FROM users WHERE id = $1
    `, [userId]);
}

async function getUserIdByToken(token) {
    return connection.query(`
    SELECT "users"."id" as "userId", "users"."userName", "sessions"."token" FROM sessions
    JOIN users ON
    "users"."id" = "sessions"."userId" 
    WHERE "sessions"."token" = $1
    `, [token]);
}

async function getUserPosts(userId){
    return await connection.query(
        `SELECT
            posts."id" AS "postId",
            posts."userId" AS "userId",
            users."userName" AS "userName",
            users.image AS "userImage",
            posts.content AS "postContent",
            posts.url AS url,
            metadatas.title AS "urlTitle",
            metadatas.description AS "urlDescription",
            metadatas.image AS "urlImage",
            "tags_Posts"."tagName" as "tags"
        FROM posts
        JOIN metadatas ON
        posts.url = metadatas.url
        JOIN users ON
        posts."userId" = users.id
        JOIN "tags_Posts" ON 
        "tags_Posts"."postId" = posts.id
        WHERE posts."userId" = $1
        ORDER BY posts."createdAt"
        DESC LIMIT 20
      
     `, [userId])
}

const userRepository = {
    getUsersList,
    getUserId,
    getUserIdByToken,
    getUserPosts
}

export default userRepository;