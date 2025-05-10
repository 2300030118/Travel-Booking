import React from 'react';
import '../styles/login.css'; // Reuse login.css for styling
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Forgot Password</h2>

        <form className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <button type="submit" className="login-button">Send Reset Link</button>
        </form>

        <p className="login-footer">
          Remembered your password? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
