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
        res.status(200).send(list);
    } catch (err) {
        res.status(500).send(err.message);
    }

}