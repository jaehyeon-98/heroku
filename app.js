const express = require("express");
const path = require("path");

const app = express();

const db = require("./models/index");

const markers = require("./markers");

const { Marker } = db;

const axios = require("axios");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("URL should contain /api/..");
});

app.get("/map/api/markers", (req, res) => {
  res.send(markers);
});

app.get("/map/api/markers/:id", (req, res) => {
  const { id } = req.params;
  const marker = markers.find((m) => m.id === Number(id));
  if (marker) {
    res.send(marker);
  } else {
    res.status(404).send({ message: "There is no such marker" });
  }
});

app.use("/map", express.static(path.join(__dirname, "./public")));

app.get("/map", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
