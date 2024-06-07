const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config(); // Load environment variables

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json("User registered successfully");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("Invalid credentials");

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET, // Use JWT_SECRET from .env file
      { expiresIn: "1h" }
    );

    res.json({ token, isAdmin: user.isAdmin }); // Include isAdmin in the response
  } catch (err) {
    res.status(500).json("Error: " + err);
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Fetch all users excluding password field
    res.json(users);
  } catch (err) {
    res.status(500).json("Error: " + err);
  }
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log("Authorization Header:", authHeader); // Add this line to debug header

  if (!authHeader) return res.status(401).json("Access denied");

  const token = authHeader.split(" ")[1];
  console.log("Token:", token); // Add this line to debug token

  if (!token) return res.status(401).json("Access denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Verified:", verified); // Add this line to debug verification
    req.user = verified;
    next();
  } catch (err) {
    console.log("Token verification error:", err); // Add this line to debug error
    res.status(400).json("Invalid token");
  }
};

// Middleware to check admin
const verifyAdmin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).json("Access denied");
  next();
};

module.exports = {
  router,
  verifyToken,
  verifyAdmin,
};
