import { usersRepository } from "../repositories/users.repository.js";

export async function getUser (req, res) {

    try {
        
    } catch (err) {
        res.status(500).send(err.message);
    }

}