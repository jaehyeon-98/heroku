const express = require("express");

const app = express();

const db = require("./models/index");

app.get("/api/markers/:id", (req, res) => {
  const { id } = req.params;
  res.send(markers);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
