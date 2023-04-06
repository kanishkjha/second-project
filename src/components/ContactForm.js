import React from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  return (
    <div className="form">
      <div className="form-wrapper">
        {/* This has to be taken care of */}

        <div>
          <label htmlFor="birth-year">Birthyear</label>
          <select value="">
            <option value="1">2011</option>
            <option value="2">2022</option>
            <option value="3">2023</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Birthday</label>
          <input type="date" id="birthYear" name="birthYear" max="YYYY-12-31" />
        </div>

        <div>
          <label htmlFor="">Name</label>
          <input type="text" id="name" />
        </div>
      </div>
    </div>
  );
}
