const express = require("express");
const router = express.Router();

const sensors = require("../data/sensors.json");

router.get("/", (req, res) => {
  res.json(sensors);
});

module.exports = router;