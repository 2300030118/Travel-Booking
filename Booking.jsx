import React, { useState } from 'react';

const Booking = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDateChange = (e) => {
    setTravelDate(e.target.value);
  };

  return (
    <div className="booking-container">
      <h2>Book Your Travel</h2>

      {/* Travel Date Input */}
      <div className="date-picker">
        <label htmlFor="travelDate">Select Travel Date:</label>
        <input
          type="date"
          id="travelDate"
          value={travelDate}
          onChange={handleDateChange}
        />
      </div>

      {/* Booking Options Selection */}
      <div className="booking-options">
        <h3>Select your mode of transport:</h3>
        <div>
          <input
            type="radio"
            id="bus"
            name="transport"
            value="bus"
            checked={selectedOption === 'bus'}
            onChange={handleOptionChange}
          />
          <label htmlFor="bus">Bus</label>
        </div>
        <div>
          <input
            type="radio"
            id="train"
            name="transport"
            value="train"
            checked={selectedOption === 'train'}
            onChange={handleOptionChange}
          />
          <label htmlFor="train">Train</label>
        </div>
        <div>
          <input
            type="radio"
            id="flight"
            name="transport"
            value="flight"
            checked={selectedOption === 'flight'}
            onChange={handleOptionChange}
          />
          <label htmlFor="flight">Flight</label>
        </div>
      </div>

      {/* Display the booking form based on selection */}
      {selectedOption === 'bus' && (
        <div className="bus-booking">
          <h4>Bus Booking</h4>
          {/* Add bus-specific form fields here */}
          <p>Bus details will be here...</p>
        </div>
      )}

      {selectedOption === 'train' && (
        <div className="train-booking">
          <h4>Train Booking</h4>
          {/* Add train-specific form fields here */}
          <p>Train details will be here...</p>
        </div>
      )}

      {selectedOption === 'flight' && (
        <div className="flight-booking">
          <h4>Flight Booking</h4>
          {/* Add flight-specific form fields here */}
          <p>Flight details will be here...</p>
        </div>
      )}

      <button className="submit-btn">Submit Booking</button>
    </div>
  );
};

export default Booking;
