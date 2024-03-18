import express from "express";

function config(app) {
    // config template engine
    app.set("views", "./src/views");
    app.set("view engine", "ejs");
    //config static
    app.use(express.static("./src/public"));
}

export default config;
