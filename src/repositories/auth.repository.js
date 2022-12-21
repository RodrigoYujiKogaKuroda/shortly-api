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

async function findUser(
    email,
    password
) {
	return connection.query("");
}

async function signIn(
    email,
    password
) {
	return connection.query("");
}

export const authRepository = {
    signUp,
    findUser,
    signIn
}