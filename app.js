import express, { urlencoded } from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js"
import {errorMiddleware} from './middlewares/errorMiddleware.js'
import userRouter from "./router/userRouter.js"
import appointmentRouter from "./router/appointmentRouter.js"
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
config({path : "./config/config.env"});

// const path = require("path");

app.use(
    cors ({
    origin : [process.env.FRONTEND_URL , process.env.DASHBOARD_URL],
    method : ["GET", "POST", "DELETE", "PUT"],
    credentials : true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(
    fileUpload({
        useTempFiles : true,
        tempFileDir : "/tmp/"
    })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment" , appointmentRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });

dbConnection();
app.use(errorMiddleware);
export default app;