import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Quizzes from "./pages/Quizzes";   // This shows all quiz topics
import Quiz from "./pages/Quiz";         // ✅ This one was missing
import Leaderboard from "./pages/Leaderboard";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Quizzes />} /> {/* Show all quizzes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz/:topic" element={<Quiz />} /> {/* ✅ Quiz page */}
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz/:topic/:difficulty" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
