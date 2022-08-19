import connection from "../dbstrategy/postgres.js";

async function getFollowersById(id) {
    return connection.query(`
        SELECT 
            followers."followerId" AS "followerId",
            followers."followingId" AS "followingId",
            users."userName" AS "followingName"
        FROM followers
        JOIN users ON
        followers."followingId" = users.id
        WHERE "followerId" = $1
    `, [id]);
}

async function postFollowersById(followerId, followingId) {
    return connection.query(`
        INSERT INTO followers (
            "followerId",
            "followingId"
        ) VALUES (
            $1, $2
        )
    `, [
        followerId, followingId
    ]);
}

async function deleteFollowersById(followerId, followingId) {
    return connection.query(`
        DELETE FROM followers
        WHERE "followerId" = $1
        AND "followingId" = $2
    `, [
        followerId, followingId
    ]);
}

const followRepository = {
    getFollowersById,
    postFollowersById,
    deleteFollowersById
};

export default followRepository;