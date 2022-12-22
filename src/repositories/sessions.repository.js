import { connection } from "../database/database.js";

async function connectSession(token) {
	return connection.query(
        "SELECT * FROM sessions WHERE token=$1;",
        [token]
    );
}

async function findUser(id) {
	return connection.query(
        "SELECT * FROM users WHERE id=$1;",
        [id]
    );
}

export const sessionRepository = {
    connectSession,
    findUser
}