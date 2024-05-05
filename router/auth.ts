import express from "express";
const router = express.Router();

import { login, register, deleteAll } from "../controllers/auth";
import verifyJWT from "../controllers/verify";

router.post("/register", register);
router.post("/login", login);
// router.get("/delete", deleteAll);

// accessed by protected route
router.get("/verify", verifyJWT);

export default router;
