const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Cache-control, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, X-Access-Token, Access-Control-Allow-Credentials, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
  );
  next();
});

app.get("/", function (req, res) {
  res.status(200).json("Hello World");
});

app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
