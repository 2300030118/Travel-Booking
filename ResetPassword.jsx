import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import '../styles/Login.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('Password should be at least 6 characters.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      alert('Password successfully reset!');
      navigate('/');
    }
  };

  return (
    <div className="login-page">
      <Menu />
      <div className="login-box">
        <h2>Reset Password</h2>
        <form onSubmit={handleReset}>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
