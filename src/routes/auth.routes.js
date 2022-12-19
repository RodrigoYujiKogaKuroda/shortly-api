import { Router } from "express";
import { signUp, signIn } from '../controllers/auth.controller.js'
import { signUpModelValidation, signInModelValidation } from "../middlewares/authModelValidation.middleware.js";

const router = Router();

router.post("/signup", signUpModelValidation, signUp);
router.post("/signin", signInModelValidation, signIn);

export default router;