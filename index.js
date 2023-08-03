const express = require("express");
const app = express()

app.use(require("express").static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about-us", (req, res) => {
    res.sendFile(__dirname + "/public/about-us.html");
});

app.get("/team", (req, res) => {
  res.sendFile(__dirname + "/public/team.html");
});

/* app.get('*', function(req, res) {
  res.status(404).sendFile(__dirname + "/public/page-not-found.html");
}); */

app.listen(8080);
