const express = require("express");
const router = express.Router();

const cameras = require("../data/cameras.json");

router.get("/", (req, res) => {
  res.json(cameras);
});

module.exports = router;