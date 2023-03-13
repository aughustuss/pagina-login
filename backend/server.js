

import dotenv from 'dotenv'; //load .env
dotenv.config();

import express from "express";
import cors from "cors";
import db from "./db/db.js";
import routes from "./routes/index.js"

const port = process.env.PORT || 3000;

const app = express();

app.use(cors('')); //enable cors
app.use(express.json())

routes(app); //api routes





app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});



