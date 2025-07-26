import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // We'll add this next

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      setUser(res.data.user);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>BrainBoost Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      {user && (
        <div className="login-welcome">
          <p>Welcome, {user.name}!</p>
          <p>XP: {user.xp} | Level: {user.level}</p>
        </div>
      )}
      <p>{message}</p>
    </div>
  );
};

export default Login;
