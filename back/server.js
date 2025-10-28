import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import cors from "cors";

dotenv.config();

const port = process.env.APP_PORT || 8000;
const host = process.env.APP_HOST || "localhost";
const mongo_url =
	process.env.MONGO_SESSION_URL || "mongodb://127.0.0.1:27017/session";
const session_secret = process.env.SESSION_SECRET || "session-secret";

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(router);

server.listen(port, host, () => {
	console.log(`Application running at http://${host}:${port}`);
});
