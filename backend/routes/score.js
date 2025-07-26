const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// Save score
router.post("/save", async (req, res) => {
  const { username, coins } = req.body;
  try {
    const score = new Score({ username, coins });
    await score.save();
    res.status(201).json({ message: "Score saved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save score" });
  }
});

// Get leaderboard
router.get("/leaderboard", async (req, res) => {
  try {
    const topScores = await Score.find().sort({ coins: -1 }).limit(10);
    res.json(topScores);
  } catch (err) {
    res.status(500).json({ error: "Failed to get leaderboard" });
  }
});

module.exports = router;
