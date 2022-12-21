import { connection } from "../database/database.js";

async function getUser() {
	return connection.query();
}

export const usersRepository = {
    getUser
}