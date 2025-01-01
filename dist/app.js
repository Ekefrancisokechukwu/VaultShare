import dotenv from "dotenv";
import express from "express";
import notfoundMiddleware from "./middleware/notfound.js";
dotenv.config();
const app = express();
//  basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(notfoundMiddleware);
export { app };
