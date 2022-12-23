import { connection } from "../database/database.js";

async function shortUrl({
    shortUrl,
    url,
    userId
}) {
	return connection.query(
        "INSERT INTO links (short_url, url, visit_count, user_id) VALUES ($1, $2, $3, $4);",
        [shortUrl, url, 0, userId]
    );
}

async function getUrl(id) {
	return connection.query(
        "SELECT * FROM links WHERE id=$1;",
        [id]
    );
}

async function redirectToUrl(shortUrl) {
	return connection.query(        
        "SELECT * FROM links WHERE shortUrl=$1;",
        [shortUrl]
    );
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