import React, { useState } from "react";
import "./FormWifi.css"; // Import CSS file for styling

function FormWifi() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    optForNewsLetters: false,
    acceptDataUsagePolicy: false
  });

  const [errors, setErrors] = useState({
    name: "",
    number: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle different input types
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue
    });

    // Perform validation
    if (name === "email") {
      // Simple email validation
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setErrors({
        ...errors,
        email: isValidEmail ? "" : "Invalid email format"
      });
    } else if (name === "number") {
      // Simple number validation
      const isValidNumber = /^\d+$/.test(value);
      setErrors({
        ...errors,
        number: isValidNumber ? "" : "Invalid number format"
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit logic here
    console.log("Form submitted:", formData);


    history.push(""); // --> redirect to link the wifi link 


  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
          {errors.number && <span className="error-msg">{errors.number}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="optForNewsLetters"
            checked={formData.optForNewsLetters}
            onChange={handleChange}
          />
          <label>Opt for newsletters</label>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="acceptDataUsagePolicy"
            checked={formData.acceptDataUsagePolicy}
            onChange={handleChange}
          />
          <label>Accept data usage policy</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormWifi;
