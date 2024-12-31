import dotenv from "dotenv";
import express, { Application } from "express";

dotenv.config();
const app: Application = express();

//  basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export { app };
