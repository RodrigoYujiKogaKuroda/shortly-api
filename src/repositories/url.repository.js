import { connection } from "../database/database.js";

async function shortUrl({
    shortUrl,
    url,
    user_id
}) {
	return connection.query(
        "INSERT INTO links (shortUrl, url, visit_count, user_id) VALUES ($1, $2, $3, $4);",
        [shortUrl, url, 0, user_id]
    );
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