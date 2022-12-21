import { connection } from "../database/database.js";

async function getRanking() {
	return connection.query();
}

export const rankingsRepository = {
    getRanking
}