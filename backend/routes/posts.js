const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const Post = require("../models/Post");
const { verifyToken } = require("./users");

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Create Post Route
router.post("/", verifyToken, upload.single("photo"), async (req, res) => {
  try {
    const { title, content } = req.body;
    const photo = req.file ? req.file.path : "";
    const newPost = new Post({
      title,
      content,
      photo,
    });
    await newPost.save();
    res.status(201).json("Post created successfully");
  } catch (err) {
    console.error("Error creating post:", err); // Log the error for debugging
    res.status(400).json("Error: " + err);
  }
});

// Fetch All Posts Route
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json("Error: " + err);
  }
});

module.exports = router;
