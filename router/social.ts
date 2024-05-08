import express from "express";
import { allsocial, newPwn, pwnedSocials } from "../controllers/social";
import { authenticate } from "../middleware/authenticate";
const router = express.Router();

router.get("/", allsocial);
router.post("/newPwn", newPwn);
router.get("/pwned", authenticate, pwnedSocials);

export default router;
