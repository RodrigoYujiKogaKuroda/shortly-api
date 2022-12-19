import { connection } from "../database/database.js";
import { urlModel } from "../models/url.model.js";

export async function urlModelValidation(req, res, next) {

    try {

    } catch (err) {
        res.status(500).send(err.message);
    }

    next();

}