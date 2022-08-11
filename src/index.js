import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import postRouter from "./routes/postRouter.js";
import tagsRouter from "./routes/tagsRouter.js";
import connection from "./dbstrategy/postgres.js";
dotenv.config();

const server = express();

server.get("/teste",async(req,res)=> {
    const {rows:teste }= await connection.query("select * FROM users")
    res.send(teste)
})

server.use(express.json());
server.use(cors());

server.use(authRouter);
server.use(postRouter);
server.use(tagsRouter);

server.listen(process.env.PORT, () => console.log("Server is listening." + process.env.PORT));
