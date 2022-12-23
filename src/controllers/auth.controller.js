import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { authRepository } from "../repositories/auth.repository.js";

export async function signUp (req, res) {

    const { 
        name,
        email,
        password
    } = req.body;

    try {
        const passwordHash = bcrypt.hashSync(password, 10);
        await authRepository.signUp(name, email, passwordHash);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function signIn (req, res) {

    const id = res.locals.userId;
    const token = uuid();

    try {
        await authRepository.signIn(token, id);
        res.status(200).send(token);
    } catch (err) {
        res.status(500).send(err.message);
    }

}