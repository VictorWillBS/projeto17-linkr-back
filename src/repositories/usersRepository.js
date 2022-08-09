import connection from "../dbstrategy/postgres.js";
import bcryp from "bcrypt";

async function getUserByEmail(email) {
  return connection.query(
    `
        SELECT * FROM users
        WHERE email = $1
    `,
    [email]
  );
}

async function addUser(email, password, userName, pictureUrl) {
  return connection.query(
    `
        INSERT INTO users (email, password, "userName", image)
        VALUES ($1, $2, $3, $4)
    `,
    [email, bcryp.hashSync(password, 10), userName, pictureUrl]
  );
}

const usersRepository = {
  getUserByEmail,
  addUser,
};

export default usersRepository;
