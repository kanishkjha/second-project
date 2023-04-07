import React, { useState } from "react";
import "../styles/ContactForm.css";
import { FaShieldAlt } from "react-icons/fa";

export default function ContactForm() {
  const currentYear = new Date().getFullYear();
  const birthYears = [];
  for (let year = 1900; year <= currentYear; year++) {
    birthYears.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  const [selectedPosition, setSelectedPosition] = useState(""); // State to store the selected position

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value); // Update the selected position in state
  };

  const handleFileChange = (event) => {
    // Handle file change event here
    const file = event.target.files[0];
    // Perform validation on file type and size
    // Upload file or perform further processing
  };

  const handleStateChange = (event) => {
    // Handle state change event here
    const selectedState = event.target.value;
    // Perform further processing with the selected state
  };

  const handleCityChange = (event) => {
    // Handle city change event here
    const selectedCity = event.target.value;
    // Perform further processing with the selected city
  };

  return (
    <div className="form">
      <div className="form-wrapper">
        {/* This has to be taken care of */}
        <div className="flex">
          <div id="birth-year">
            <label htmlFor="birthYear">Select Birth Year:</label>
            <select id="birthYear" name="birthYear">
              <option value="">--Select Year--</option>
              {birthYears}
            </select>
          </div>

          <div id="birth-day">
            <div>
              <label htmlFor="month" id="birth-month">
                Birth Month:
              </label>
              <select id="month" name="month">
                <option value="">--Month--</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>

              <select id="day" name="day">
                <option value="">--Day--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                {/* Add more day options as needed */}
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="accountPrivacy" className="account-policy-heading">
            <FaShieldAlt /> Privacy:
          </label>
          <div className="account-policy-container">
            <input
              type="checkbox"
              id="private"
              name="accountPrivacy"
              value="private"
            />
            <label htmlFor="private" className="account-policy-label">
              Private
            </label>
            <input
              type="checkbox"
              id="public"
              name="accountPrivacy"
              value="public"
            />
            <label htmlFor="public" className="account-policy-label">
              Public
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+91"
          />
        </div>

        <div>
          <label htmlFor="areaOfInterest">Area of Interest:</label>
          <input
            type="radio"
            id="partTime"
            name="areaOfInterest"
            value="Part Time"
          />
          <label htmlFor="partTime" id="area-of-interest">
            Part Time
          </label>
          <input
            type="radio"
            id="fullTime"
            name="areaOfInterest"
            value="Full Time"
          />
          <label htmlFor="fullTime" id="area-of-interest">
            Full Time
          </label>
        </div>

        <div>
          <label htmlFor="position">Position:</label>
          <select
            id="position"
            name="position"
            value={selectedPosition}
            onChange={handlePositionChange}
          >
            <option value="">Select Position</option>
            <option value="Fresher">Fresher</option>
            <option value="Intermediate Developer">
              Intermediate Developer
            </option>
            <option value="Senior Developer">Senior Developer</option>
          </select>
        </div>

        <div>
          <label htmlFor="skillInput">Skill:</label>
          <input
            type="text"
            id="skillInput"
            name="skillInput"
            placeholder="Enter a skill"
          />
        </div>

        <div>
          <label htmlFor="categorySelect">Category:</label>
          <select id="categorySelect" name="categorySelect">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full-Stack</option>
          </select>
        </div>

        <div>
          <label htmlFor="organization">Organization:</label>
          <select id="organization" name="organization">
            <option value="Private">Private</option>
            <option value="Public">Public</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div>
          <label htmlFor="sector">Sector:</label>
          <select id="sector" name="sector">
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Finance">Finance</option>
            <option value="Customer Services">Customer Services</option>
          </select>
        </div>

        <div>
          <label htmlFor="prefferedLocation">Preffered Location</label>
          <input type="text" name="prefferedLocation" id="prefferedLocation" />
        </div>

        <div>
          <label htmlFor="resume">
            Updated Detailed Resume (*doc, *docx, *rtf, *txt, *pdf) 2MB max:
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".doc, .docx, .rtf, .txt, .pdf"
            onChange={handleFileChange}
            max-size="2MB"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <select id="country" name="country">
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            {/* Add more country options as needed */}
          </select>
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <select id="state" name="state" onChange={handleStateChange}>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Haryana">Haryana</option>
          </select>
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <select id="city" name="city" onChange={handleCityChange}>
            <option value="Jaipur">Jaipur</option>
            <option value="Prayag Raj">Prayag Raj</option>
            <option value="Hisar">Hisar</option>
          </select>
        </div>

        <div>
          <label htmlFor="pin">PIN</label>
          <input type="text" name="pin" id="pin" />
        </div>

        <div>
          <input type="checkbox" id="terms" name="terms" required />
          By click agree, you agree to the NotOut60 <span>
            User Agreement
          </span>, <span>Policy</span> and <span>Terms</span>
          <label htmlFor="terms"></label>
        </div>

        <button className=".btn">Register Me</button>
      </div>
    </div>
  );
}
