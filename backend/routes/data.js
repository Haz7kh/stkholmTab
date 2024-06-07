const router = require("express").Router();
const Data = require("../models/Data");
const { verifyToken } = require("./users");

// Get Data Route
router.get("/", verifyToken, async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json("Error: " + err);
  }
});

// Submit Data Route
router.post("/", verifyToken, async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json("Data submitted successfully");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
