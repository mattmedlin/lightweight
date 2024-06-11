import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import "dotenv/config";
import router from "./router";

const app = express();

const corsOptions = {
  credentials: true,
};

app.use(cors(corsOptions));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", router);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server running...");
});
