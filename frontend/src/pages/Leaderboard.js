import React, { useEffect, useState } from "react";
import "./Leaderboard.css";

const sampleData = [
  { username: "Swathi", coins: 30 },
  { username: "Ajay", coins: 20 },
  { username: "Priya", coins: 10 },
];

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // For now show sample data
    setUsers(sampleData);
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Coins 🪙</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={index}>
              <td>#{index + 1}</td>
              <td>{u.username}</td>
              <td>{u.coins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
