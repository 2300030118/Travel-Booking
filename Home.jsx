import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu'; // Assuming Menu.jsx is in the same folder
import '../styles/Home.css';

const Home = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission and API call
  const handleSignup = (e) => {
    e.preventDefault();  // Prevent page reload on form submission

    const data = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    // Calling API to sign up the user
    CallApi('POST', 'http://localhost:8080/User/signup', data, getResponse);
  };

  // Method to handle API response
  const getResponse = (response) => {
    if (response.success) {
      alert('Signup successful!');
      // Navigate or perform further actions here
    } else {
      alert('Signup failed. Please try again.');
    }
  };

  // Method to call the API
  const CallApi = (method, url, data, callback) => {
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Sending data as JSON
    })
      .then((response) => response.json()) // Parse JSON response
      .then((data) => callback(data)) // Handle success response
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error processing your request.');
      });
  };

  return (
    <div className="home-container">
      <Menu />

      <header className="home-header">
        <h1>Explore. Book Ticket. Travel.</h1>
        <p>Your personal travel agent and booking platform</p>
        <Link to="/book-choice" className="btn-book-choice">BookChoice</Link>
      </header>

      <main>
        <section className="bookchoice-section">
          <h2>Choose Your Travel Mode</h2>
          <div className="bookchoice-cards">
            <div className="bookchoice-card">
              <h3>Bus Booking</h3>
              <p>Find and book bus routes across the country.</p>
              <Link to="/bus-booking" className="btn-book-now">Book Now</Link>
            </div>
            <div className="bookchoice-card">
              <h3>Train Booking</h3>
              <p>Explore train schedules and secure your seats in seconds.</p>
              <Link to="/train-booking" className="btn-book-now">Book Now</Link>
            </div>
            <div className="bookchoice-card">
              <h3>Flight Booking</h3>
              <p>Compare fares and book your flights seamlessly.</p>
              <Link to="/flight-booking" className="btn-book-now">Book Now</Link>
            </div>
          </div>
        </section>

        {/* Signup Form for API Call */}
        <section className="signup-section">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="btn-signup">Sign Up</button>
          </form>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 Travel Companion. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
