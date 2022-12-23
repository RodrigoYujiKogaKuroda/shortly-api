import { nanoid } from "nanoid";
import { urlRepository } from "../repositories/url.repository.js";
import { sessionRepository } from "../repositories/sessions.repository.js";

export async function shortUrl (req, res) {

    const { url } = req.body;
    const user = res.locals.user;
    const short = nanoid();
    
    try {
        await urlRepository.shortUrl(short, url, user.id);
        res.status(201).send({"shortUrl": short});
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function getUrl (req, res) {

    const { id } = req.params;

    try {
        const url = await urlRepository.getUrl(id);
        if (url.rows.length === 0) {
            return res.sendStatus(404);
        }
        const urlToSend = {
            id: url.rows[0].id,
            shortUrl: url.rows[0].short_url,
            url: url.rows[0].url,
        }
        res.status(200).send(urlToSend);
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function redirectToUrl (req, res) {

    const { shortUrl } = req.params;

    try {
        const url = await urlRepository.redirectToUrl(shortUrl);
        if (!url.rows) {
            return res.sendStatus(404);
        }
        url.rows[0].visit_count++;
        res.redirect(url.rows[0].url);
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function deleteUrl (req, res) {

    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if(!token){
        return res.sendStatus(401);
    }

    const { id } = req.params;

    try {
        const url = await urlRepository.getUrl(id);
        if (!url.rows[0]) {
            return res.sendStatus(404);
        }

        const sessions = await sessionRepository.connectSession(token);
        if (url.rows[0].user_id !== sessions.rows[0].user_id) {
            return res.sendStatus(401);
        }
        await urlRepository.deleteUrl(id);
        return res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err.message);
    }

}