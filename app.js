const express = require("express");

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

app.get("/api/markers/:id", (req, res) => {
  const { id } = req.params;
  const marker = markers.find((m) => m.id === Number(id));
  if (marker) {
    res.send(marker);
  } else {
    res.status(404).send({ message: "There is no such marker" });
  }
});

app.get("/map", async (req, res) => {
  try {
    const response = await axios.get("https://dapi.kakao.com/v2/maps/sdk.js", {
      params: {
        appkey: "769174d1491a62bbc3d2217ff2e2ded1",
        libraries: "services",
      },
    });

    res.type("application/javascript").send(response.data);
  } catch (error) {
    console.error("Error fetching map script:", error);
    res.status(500).send("Failed to fetch map script");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});

// 오류는 없는데 실행이 안됨, get이랑 post 해서 되는지 먼저 확인 해야할듯//

3;
