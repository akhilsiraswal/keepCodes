const express = require("express");
const connection = require("./connection");
connection();
const port = 8000;
const app = express();

app.use(express.json());

app.listen(port, (req, res) => {
  console.log("server listening on ", port);
});
