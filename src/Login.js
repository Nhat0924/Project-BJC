import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(""); // State for email
    const [password, setPassword] = useState(""); // State for password
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/dashboard");
    };

  return (
    <div className="login-container">
      <h1 className="brand-title">Beauty and Joy of Computing</h1>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={!email || !password} // Disable if email or password is empty
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
