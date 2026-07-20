const express = require("express");
const router = express.Router();

const accessoirs = require("../data/accessoirs.json");

router.get("/", (req, res) => {
  res.json(accessoirs);
});

module.exports = router;