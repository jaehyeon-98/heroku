const express = require("express");

const app = express();

const db = require("./models/index");

const markers = require("./markers");

const { Marker } = db;

app.use(express.json());

app.get("/api/markers/:id", (req, res) => {
  const { id } = req.params;
  const marker = markers.find((m) => m.id === Number(id));
  if (marker) {
    res.send(marker);
  } else {
    res.status(404).send({ message: "There is no such marker" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});

// 오류는 없는데 실행이 안됨, get이랑 post 해서 되는지 먼저 확인 해야할듯//
