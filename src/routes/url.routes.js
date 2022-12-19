import { Router } from "express";
import { shortUrl, getUrl, redirectToUrl, deleteUrl } from '../controllers/url.controller.js'
import { urlModelValidation } from "../middlewares/urlModelValidation.middleware.js";

const router = Router();

router.post("/urls/shorten", urlModelValidation, shortUrl);
router.get("/urls/:id", getUrl);
router.get("/urls/open/:shortUrl", redirectToUrl);
router.delete("/urls/:id", deleteUrl);

export default router;