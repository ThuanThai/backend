import "dotenv/config";
import express from "express";
import config from "./config/config.js";
import webRouter from "./routes/web.js";
const app = express();
//config middle ware for using req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// call variable from .env
const port = process.env.PORT;
const hostName = process.env.HOST_NAME;

config(app);
app.use("/", webRouter);

app.listen(port, hostName, () => {
    console.log(`Example app listening on port ${port}`);
});
