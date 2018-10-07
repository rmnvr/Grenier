const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mailer = require("./Mailer.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/mailer", mailer);

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(5000, function() {
  console.log("app listening on http://localhost:5000/ ");
});
