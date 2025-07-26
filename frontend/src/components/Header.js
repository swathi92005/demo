import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [coins, setCoins] = useState(0);

  const fetchCoins = () => {
    const total = parseInt(localStorage.getItem("totalCoins")) || 0;
    setCoins(total);
  };

  useEffect(() => {
    fetchCoins();

    const handleStorageChange = () => {
      fetchCoins();
    };

    // 🔄 Listen to updates even within the same tab
    window.addEventListener("storage", handleStorageChange);

    // 🔄 Listen to custom event triggered by Quiz.js in same tab
    const interval = setInterval(() => {
      fetchCoins(); // poll every 1s as a fallback
    }, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header">
      <h1 className="logo">🧠 BrainBoost</h1>
      <div className="nav-links">
        <Link to="/">Quizzes</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>

        <span style={{ marginLeft: "20px", color: "#ffd700", fontWeight: "bold" }}>
          🪙 {coins} Coins
        </span>
      </div>
    </div>
  );
};

export default Header;
