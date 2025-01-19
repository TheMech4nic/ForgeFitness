import express from "express";
import { register } from "../controllers/user.controller.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

router.route("/register").post(singleUpload ,register);

export default router;