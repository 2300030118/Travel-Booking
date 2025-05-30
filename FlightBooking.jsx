import React, { useState } from 'react';
import '../styles/FlightBooking.css';
import AIChat from '../components/AIChat';

function FlightBooking() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    travelDate: '',
    travelTime: '',
    flightName: '',
    seatClass: 'economy',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });

  const [showPayment, setShowPayment] = useState(false);

  const flights = [
    { name: 'Air India 101', time: '09:00 AM' },
    { name: 'IndiGo 202', time: '01:00 PM' },
    { name: 'Vistara 303', time: '06:00 PM' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true); // Move to payment screen
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log('Flight booking completed:', formData);
    alert('Flight Booking Successful!');
    setFormData({ ...formData, cardNumber: '', expiryDate: '', cvv: '', upiId: '' });
    setShowPayment(false);
  };

  return (
    <div className="booking-container">
      <h2>Flight Booking</h2>
      <AIChat />

      {!showPayment ? (
        <form className="booking-form" onSubmit={handleBookingSubmit}>
          <div className="section">
            <h3>Passenger Details</h3>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
            <input type="time" name="travelTime" value={formData.travelTime} onChange={handleChange} required />
          </div>

          <div className="section">
            <h3>Flight Selection</h3>
            <select name="flightName" value={formData.flightName} onChange={handleChange} required>
              <option value="">Select Flight</option>
              {flights.map((flight, index) => (
                <option key={index} value={flight.name}>
                  {flight.name} - {flight.time}
                </option>
              ))}
            </select>
            <select name="seatClass" value={formData.seatClass} onChange={handleChange} required>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button type="submit">Book Now</button>
        </form>
      ) : (
        <form className="booking-form" onSubmit={handlePaymentSubmit}>
          <div className="section">
            <h3>Payment Details</h3>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
              <option value="card">Card</option>
              <option value="upi">UPI</option>
            </select>

            {formData.paymentMethod === 'card' && (
              <>
                <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
                <input type="text" name="expiryDate" placeholder="Expiry Date (MM/YY)" value={formData.expiryDate} onChange={handleChange} required />
                <input type="password" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
              </>
            )}

            {formData.paymentMethod === 'upi' && (
              <input type="text" name="upiId" placeholder="UPI ID" value={formData.upiId} onChange={handleChange} required />
            )}
          </div>

          <button type="submit">Pay & Confirm</button>
        </form>
      )}
    </div>
  );
}

export default FlightBooking;
