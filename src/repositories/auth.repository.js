import { connection } from "../database/database.js";

async function signUp(
    name,
    email,
    password
) {
	return connection.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);",
        [name, email, password]
    );
}

async function findUser(email) {
	return connection.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
    );
}

async function signIn(
    token,
    id
) {
	return connectionquery(
        "INSERT INTO sessions (token, user_id) VALUES ($1, $2);",
        [token, id]
    );
}

export const authRepository = {
    signUp,
    findUser,
    signIn
}