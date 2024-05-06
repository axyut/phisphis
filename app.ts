import "dotenv/config";
import "express-async-errors";
import express from "express";
const app = express();

// bodyparser
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// Local Modules
import rootRouter from "./router/root";
import { errorHandler, notFound } from "./middleware/error-handler";
import { connectDB } from "./db/connection";

// Security Packages
import helmet from "helmet";
import cors from "cors";
import rateLimiter from "express-rate-limit";
import { HandleEnvVars } from "./utils/handleEnvVars";
const xss = require("xss-clean");

// Security
app.set("trust proxy", 1); // enable if your behind a reverse proxy (heroku, bluemix, aws elb, nginx)
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, // 1 minutes
        max: 100, // limit each ip to 100 requests per windowMs
    })
);
app.use(helmet());
app.use(cors());
app.use(xss());

// Parse JSON Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("", rootRouter);

// Error Middleware
app.use(errorHandler);
app.use(notFound);

// Server
const start = () => {
    const { PORT, DB_CONN } = HandleEnvVars();
    try {
        connectDB(DB_CONN).then(() => {
            app.listen(PORT, () => {
                console.log(`Server is running at http://localhost:${PORT}`);
            });
        });
    } catch (error) {
        console.log(error);
    }
};

start();
