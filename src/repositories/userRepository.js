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

const userRepository = {
    getUsersList,
    getUserId
}

export default userRepository;