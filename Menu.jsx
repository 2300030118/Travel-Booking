import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
  return (
    <nav className="menu" aria-label="Main navigation">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="menu-item">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="menu-item">
          <Link to="/about-us">About</Link> {/* New item added */}
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
