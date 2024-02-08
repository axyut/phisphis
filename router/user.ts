import express from "express";
const router = express.Router();

import { authenticate } from "../middleware/authenticate";
import { userInfo } from "../controllers/user";

router.get("/basicdata", authenticate, userInfo);

export default router;
