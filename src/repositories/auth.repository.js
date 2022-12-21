import { connection } from "../database/database.js";

async function signUp() {
	return connection.query();
}

async function signIn() {
	return connection.query();
}

export const authRepository = {
    signUp,
    signIn
}