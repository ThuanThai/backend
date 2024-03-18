import connection from "../config/database.js";

function getHomePage(req, res) {
    return res.render("home.ejs");
}

function getView(req, res) {
    res.render("index.ejs");
}

function postCreateUser(req, res) {
    res.send(JSON.stringify(req.body));
}
export { getHomePage, getView, postCreateUser };
