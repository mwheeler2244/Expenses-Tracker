"use client";
import React, { useState } from "react";
import { createTransaction } from "../actions/createTransactions";

export default function Transactions() {
  const [error, setError] = useState(""); // State to handle error messages

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target); // Get form data

    const { data } = await createTransaction(formData);

    if (data) {
      alert("Added transaction");
      event.target.reset(); // Reset the form after submission
    } else {
      setError("Please fill all fields correctly.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="details" className="form-label">
          Details
        </label>
        <input
          id="details"
          type="text"
          name="details"
          placeholder="Enter description details..."
          className="form-input"
          required
        />
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          placeholder="Enter dollar amount..."
          className="form-input"
          name="amount"
          required
        />
        <button type="submit" className="form-button">
          Add to List
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message if any */}
    </div>
  );
}
