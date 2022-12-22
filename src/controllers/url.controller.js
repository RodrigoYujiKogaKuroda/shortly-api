import { nanoid } from nanoid;
import { urlRepository } from "../repositories/url.repository.js";

export async function shortUrl (req, res) {

    const { url } = req.body;
    const user = res.locals.user;
    const shortUrl = nanoid(8);
    
    try {
        await urlRepository.shortUrl(shortUrl, url, user.id);
        res.status(201).send({"shortUrl": shortUrl});
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function getUrl (req, res) {

    const { id } = req.params;

    try {
        const url = await urlRepository.getUrl(id);
        if (url.rows.length === 0) {
            res.sendStatus(404);
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

    try {
        
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function deleteUrl (req, res) {

    try {
        
    } catch (err) {
        res.status(500).send(err.message);
    }

}