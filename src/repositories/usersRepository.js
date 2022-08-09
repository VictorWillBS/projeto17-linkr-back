import connection from "../dbstrategy/postgres.js";

async function getUserByEmail(email) {
    return connection.query(`
        SELECT * FROM users
        WHERE email = $1
    `, [email]);
}

const usersRepository = {
    getUserByEmail
}

export default usersRepository;