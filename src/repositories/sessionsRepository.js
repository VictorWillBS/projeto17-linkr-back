import connection from "../dbstrategy/postgres.js";

async function getSessionByUserId(userId) {
    return connection.query(`
        SELECT * FROM sessions
        WHERE "userId" = $1
    `, [userId]);
}

async function getSessionByToken(token) {
    return connection.query(`
        SELECT * FROM sessions
        WHERE token = $1
    `, [token]);
}

async function createSession(userId, token) {
    return connection.query(`
        INSERT INTO sessions (
            "userId", token
        ) VALUES (
            $1, $2
        )
    `, [
        userId, token
    ])
}

async function setSessions(token, id) {
    return connection.query(`
        UPDATE sessions SET
        token = $1
        WHERE id = $2
    `, [token, id]);
}

const sessionsRepository = {
    getSessionByUserId,
    getSessionByToken,
    createSession,
    setSessions
}

export default sessionsRepository;