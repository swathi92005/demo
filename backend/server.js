const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const scoreRoutes = require("./routes/score");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/brainboost", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection failed:", err));

// API route
app.use("/api/auth", authRoutes);

app.use("/api/score", scoreRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});

