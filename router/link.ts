import express from "express";
import { newlink } from "../controllers/link";
const router = express.Router();

router.post("/create", newlink);

export default router;
