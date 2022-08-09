import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signRouters from "./routers/signRouters.js";

dotenv.config();

const app = express();
app.use(cors(), express.json());

app.use(signRouters);

app.listen(process.env.PORT, () => {
  console.log("SERVER RUNNING!");
});
