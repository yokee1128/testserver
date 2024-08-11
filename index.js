const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.listen(port);

app.get("/api/lunch", (req, res) =>
  res.json({ menu: "떡볶이", store: "신전떡볶이", pricee: 15000 })
);
app.get("/api/dinner", (req, res) =>
  res.json({ menu: "수원왕갈비", store: "집앞", pricee: 11900 })
);
