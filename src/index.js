import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/authRouter.js";
import commentRouter from "./routes/commentRouter.js";
import likeRouter from "./routes/likeRouter.js";
import postRouter from "./routes/postRouter.js";
import tagsRouter from "./routes/tagsRouter.js";
import userRouter from "./routes/userRouter.js";
import repostRouter from "./routes/repostRouter.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());

server.use(authRouter);
server.use(postRouter);
server.use(tagsRouter);
server.use(userRouter);
server.use(likeRouter);
server.use(commentRouter);
server.use(repostRouter);

server.listen(process.env.PORT, () =>
  console.log("Server is listening." + process.env.PORT)
);
