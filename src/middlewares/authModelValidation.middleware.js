import { connection } from "../database/database.js";
import { signUpModel, signInModel } from "../models/auth.model.js";

export async function signUpModelValidation(req, res, next) {

    try {

    } catch (err) {
        res.status(500).send(err.message);
    }

    next();

}

export async function signInModelValidation(req, res, next) {

    try {

    } catch (err) {
        res.status(500).send(err.message);
    }

    next();

}