require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "https://stkholm-jby41rige-haz7khs-projects.vercel.app/", // Replace with your frontend URL
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
const userRoutes = require("./routes/users").router;
const dataRoutes = require("./routes/data");
const postRoutes = require("./routes/posts");
const contactRoutes = require("./routes/contact"); // Import the contact routes

app.use("/api/users", userRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/contact", contactRoutes); // Use the contact routes

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
