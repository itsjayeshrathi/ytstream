import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//? want to limit the size of json coming from frontend
app.use(express.json({ limit: "16kb" }));
//? url encoder
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//? to store pdf and stuff
app.use(express.static("public"));
//? to peform the crud of operation on the cookies of client
app.use(cookieParser());
export { app };
