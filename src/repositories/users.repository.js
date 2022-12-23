import { connection } from "../database/database.js";

async function getUser(id) {
	return connection.query(
        `SELECT row_to_json(x)
        FROM (
            SELECT 
                u.id,
                u.name,
                SUM(l.visit_count) as "visitCount"
            FROM links l
            JOIN users u
                ON l.user_id = u.id
            WHERE l.user_id = $1
            GROUP BY u.id
        ) AS x`,
        [id]
    );
}

async function getUserLinks(id) {
	return connection.query(
        `WITH full_info AS (
            SELECT l.id, l.short_url, l.url, l.visit_count    
            FROM links l
            WHERE l.user_id = $1
        )
        SELECT JSON_AGG(full_info.*)
        FROM full_info;`,
        [id]
    );
}

export const usersRepository = {
    getUser,
    getUserLinks
}