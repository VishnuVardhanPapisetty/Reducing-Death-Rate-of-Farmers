import React, { useState } from 'react';
import "../styles/Donation.css";
import BaseHOC from "../layouts/BaseHOC";

function Donation() {
  const [donationData, setDonationData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonationData({ ...donationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your donation submission or integration with a payment processor here
    console.log('Donation Data:', donationData);
    // Reset form after submission
    setDonationData({ name: '', email: '', amount: '', message: '' });
  };

  return (
    <div className="Donation">
      <header className="Donation-header">
        <h1>Donate to Farmers</h1>
      </header>
      <div className="Donation-container">
        <form onSubmit={handleSubmit} className="donation-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={donationData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={donationData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="amount">Amount to Donate ($):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={donationData.amount}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">Message (optional):</label>
          <textarea
            id="message"
            name="message"
            value={donationData.message}
            onChange={handleInputChange}
            rows="4"
          ></textarea>

          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
}

export default BaseHOC(Donation);
