const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static(__dirname));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);