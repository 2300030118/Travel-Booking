import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import '../styles/Payment.css';

const Payment = () => {
  const [step, setStep] = useState('form'); // 'form' -> 'processing' -> 'success'
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('bookingDetails');
    if (data) {
      setBookingDetails(JSON.parse(data));
    }
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    setStep('processing');

    setTimeout(() => {
      setStep('success');
    }, 3000); // simulate payment delay
  };

  const calculateFare = (mode) => {
    switch (mode) {
      case 'bus': return 250;
      case 'train': return 500;
      case 'flight': return 1500;
      default: return 0;
    }
  };

  if (!bookingDetails) {
    return (
      <div className="payment-page">
        <Menu />
        <div className="payment-container">
          <h2>No booking found!</h2>
        </div>
      </div>
    );
  }

  const fare = calculateFare(bookingDetails.mode);

  return (
    <div className="payment-page">
      <Menu />
      <div className="payment-container">
        {step === 'form' && (
          <form className="payment-form" onSubmit={handlePayment}>
            <h2>Choose Payment Method</h2>
            <label>
              <input type="radio" name="method" value="upi" defaultChecked /> UPI
            </label>
            <label>
              <input type="radio" name="method" value="card" /> Credit/Debit Card
            </label>
            <label>
              <input type="radio" name="method" value="netbanking" /> Net Banking
            </label>
            <button type="submit">Pay ₹{fare}</button>
          </form>
        )}

        {step === 'processing' && (
          <div className="processing">
            <h2>Processing Payment...</h2>
            <div className="spinner"></div>
          </div>
        )}

        {step === 'success' && (
          <>
            <h2>🎉 Payment Successful!</h2>

            <div className="details-section">
              <h3>Booking Details</h3>
              <p><strong>Name:</strong> {bookingDetails.name}</p>
              <p><strong>Age:</strong> {bookingDetails.age}</p>
              <p><strong>From:</strong> {bookingDetails.from}</p>
              <p><strong>To:</strong> {bookingDetails.to}</p>
              <p><strong>Mode:</strong> {bookingDetails.mode.toUpperCase()}</p>
            </div>

            <div className="details-section">
              <h3>Payment Summary</h3>
              <p><strong>Amount Paid:</strong> ₹{fare}</p>
              <p><strong>Status:</strong> ✅ Success</p>
              <p><strong>Payment Method:</strong> UPI</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
