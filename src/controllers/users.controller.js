import { usersRepository } from "../repositories/users.repository.js";
import { sessionRepository } from "../repositories/sessions.repository.js";

export async function getUser (req, res) {

    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if(!token){
        return res.sendStatus(401);
    }

    try {
        const session = await sessionRepository.connectSession(token);
        if (!session.rows[0]) {
            return res.sendStatus(401);
        }

        const user = await sessionRepository.findUser(session.rows[0].user_id);
        if (!user.rows[0]) {
            return res.sendStatus(404);
        }

        delete user.rows[0].password;
        const list = await usersRepository.getUser(user.rows[0].id);
        const shortenedUrls = await usersRepository.getUserLinks(user.rows[0].id);
        const objToSend = {
            "id": list.rows[0].row_to_json.id,
            "name": list.rows[0].row_to_json.name,
            "visitCount": list.rows[0].row_to_json.visitCount,
            "shortenedUrls": [...shortenedUrls.rows[0].json_agg]
        }
        res.status(200).send(objToSend);
    } catch (err) {
        res.status(500).send(err.message);
    }

}