import React from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add authentication logic here later
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to Your Account</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="login-footer">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;