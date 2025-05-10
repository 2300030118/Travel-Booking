import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookChoice.css';

const BookChoice = () => {
  return (
    <div className="bookchoice-container">
      <h2>Choose Your Mode of Travel</h2>
      <div className="options-container">
        <div className="option-card">
          <h3>Bus Booking</h3>
          <p>Book comfortable buses across various routes.</p>
          <Link to="/bus-booking" className="btn-book">Book Bus</Link>
        </div>
        <div className="option-card">
          <h3>Train Booking</h3>
          <p>Find train routes and reserve your seats.</p>
          <Link to="/train-booking" className="btn-book">Book Train</Link>
        </div>
        <div className="option-card">
          <h3>Flight Booking</h3>
          <p>Compare flights and fly at your convenience.</p>
          <Link to="/flight-booking" className="btn-book">Book Flight</Link>
        </div>
      </div>
    </div>
  );
};

export default BookChoice;
