import { rankingsRepository } from "../repositories/rankings.repository.js";

export async function getRanking (req, res) {

    try {
       const ranking = await rankingsRepository.getRanking();
       res.status(200).send(ranking.rows[0].json_agg);
    } catch (err) {
        res.status(500).send(err.message);
    }

}