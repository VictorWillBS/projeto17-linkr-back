import connection from "../dbstrategy/postgres.js";

async function getUsersList() {
    return connection.query(`
        SELECT
            id, "userName", image
        FROM users
    `);
}

const userRepository = {
    getUsersList
}

export default userRepository;