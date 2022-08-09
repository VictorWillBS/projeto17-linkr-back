import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import postRouter from "./routes/postRouter.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());

server.use(authRouter);
server.use(postRouter);

server.listen(process.env.PORT, () => console.log("Server is listening."));
