import bcrypt from "bcrypt";
import { v4 as uuid } from 'uuid';
import { authRepository } from "../repositories/auth.repository.js";

export async function signUp (req, res) {

    const { 
        name,
        email,
        password
    } = req.body;

    try {
        const passwordHash = bcrypt.hashSync(password, 10);
            user = {
                name: name,
                email: email,
                password: passwordHash
            }
        await authRepository.signUp(name, email, password,);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function signIn (req, res) {

    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }

}