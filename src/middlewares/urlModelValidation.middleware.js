import { urlModel } from "../models/url.model.js";
import { sessionRepository } from "../repositories/sessions.repository.js";

export async function urlModelValidation(req, res, next) {

    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if(!token){
        return res.sendStatus(401);
    }

    const { error } = urlModel.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    try {
        const session = await sessionRepository.connectSession(token);
        if (!session.rows[0]) {
            return res.sendStatus(401);
        }

        const user = await sessionRepository.findUser(session.rows[0].user_id);
        delete user.rows[0].password;
        res.locals.user = user.rows[0];
    } catch (err) {
        res.status(500).send(err.message);
    }

    next();

}