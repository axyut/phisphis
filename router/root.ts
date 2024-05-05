import express from "express";
const router = express.Router();

import authRouter from "./auth";
import userRouter from "./user";
import linkRouter from "./link";
import socialRouter from "./social";

router.use("/api/auth", authRouter);
router.use("/api/user", userRouter);
router.use("/api/link", linkRouter);
router.use("/api/social", socialRouter);

// APIs
router.get("/api", (req, res) => {
    res.json({
        msg: "Welcome",
        routes: {
            server: "/",
            client: "http://127.0.0.1:5000/",
            api: {
                auth: {
                    POST_register: "/api/auth/register",
                    POST_login: "/api/auth/login",
                    GET_delete: "/api/auth/delete",
                },
            },
        },
    });
});

export default router;
