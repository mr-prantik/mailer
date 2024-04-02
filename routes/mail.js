import express from "express";
import { sendContactMail } from "../controllers/mail.js";

const router = express.Router();

router.post("/mail", sendContactMail);

export default router;
