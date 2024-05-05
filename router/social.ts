import express from "express";
import { allsocial, newPwn } from "../controllers/social";
const router = express.Router();

router.get("/", allsocial);
router.post("/newPwn", newPwn);

export default router;
