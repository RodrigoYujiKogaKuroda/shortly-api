import { connection } from "../database/database.js";

async function shortUrl() {
	return connection.query();
}

async function getUrl() {
	return connection.query();
}

async function redirectToUrl() {
	return connection.query();
}

async function deleteUrl() {
	return connection.query();
}

export const urlRepository = {
    shortUrl,
    getUrl,
    redirectToUrl,
    deleteUrl
}