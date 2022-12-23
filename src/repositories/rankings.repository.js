import { connection } from "../database/database.js";

async function getRanking() {
	return connection.query(`
        WITH full_info AS (
            SELECT
                u.id,
                u.name,
                COUNT(l.user_id) as "linksCount",
                SUM(l.visit_count) as "visitCount"
            FROM links l
            LEFT JOIN users u
                ON l.user_id = u.id
            GROUP BY u.id
            ORDER BY "visitCount"
            LIMIT 10
        )
        SELECT JSON_AGG(full_info.*)
        FROM full_info;
    `);
}

export const rankingsRepository = {
    getRanking
}