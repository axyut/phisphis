import express from "express";
const router = express.Router();

//const authenticate = require("../middleware/authenticate");
import { login, register, deleteAll } from "../controllers/auth";
const verifyJWT = require("../authentication/verify");

router.post("/register", register);
router.post("/login", login);
router.get("/delete", deleteAll);

// accessed by protected route
router.get("/jwt", verifyJWT);

export default router;
