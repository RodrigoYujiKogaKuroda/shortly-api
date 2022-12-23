import { connection } from "../database/database.js";

async function getUser(id) {
	return connection.query(
        `SELECT 
            u.id,
            u.name,
            SUM(l.visit_count) as "visitCount"
        FROM links l
        JOIN users u
            ON l.user_id = u.id
        WHERE l.user_id = $1
        GROUP BY u.id;
        SELECT row_to_json(l)
        FROM (
            SELECT
                l.id,
                l.short_url as "shortUrl",
                l.url,
                l.visit_count as "visitCount"
            FROM links l
            WHERE l.user_id = $1
        ) as "shortenedUrls"`,
        [id]
    );
}

export const usersRepository = {
    getUser
}