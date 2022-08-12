import connection from "../dbstrategy/postgres.js";

async function getUsersById(id) {
    return connection.query(`
        SELECT * FROM users
        WHERE id = $1
    `, [id]);
}

const userRepository = {
    getUsersById
}

export default userRepository;