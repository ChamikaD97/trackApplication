import express from "express";
import cors from "cors";
import path from "path";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";

import Expence from "./routes/Expence.js";



import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "accessToken",
    secret: "importantsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60,
    },
  })
)

app.use("/expence", Expence);

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
