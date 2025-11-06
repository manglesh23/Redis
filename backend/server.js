import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./apiIntegration/apiRouter.js";

import session from "express-session";
import {RedisStore} from "connect-redis"; 
import client from "./middleware/redisClient.js";
import compression from "compression";
import os from 'os'
console.log("core:-",os.cpus().length);
// import { createRequire } from "module";

dotenv.config();
// const require=createRequire(import.meta.url);
// const connectRedis = require("connect-redis");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 5000;
// const RedisStore= connectRedis(session);
app.use(compression())
 
app.use(
  session({
    store: new RedisStore({ client: client }),
    secret: "superSecretKey", // change this in production
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 }, // 1 hour
  })
);
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
