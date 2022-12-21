import { connection } from "../database/database.js";
import { signUpModel, signInModel } from "../models/auth.model.js";

export async function signUpModelValidation(req, res, next) {

    const { 
        name,
        email,
        password,
        confirmPassword
    } = req.body;

    const user = {
        name,
        email,
        password,
        confirmPassword
    };

    const { error } = signUpModel.validate(user, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    try {
        const users = await connection.query(
            "SELECT email FROM users WHERE email=$1;",
            [email]
        );
        if (users.rows[0]) {
            return res.sendStatus(409);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }

    next();

}

export async function signInModelValidation(req, res, next) {

    const {
        email,
        password
    } = req.body;

    const user = {
        email,
        password
    };

    const { error } = signInModel.validate(user, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();

}