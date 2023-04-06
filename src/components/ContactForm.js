import React from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  return (
    <div className="form">
      <div className="form-wrapper">
        {/* This has to be taken care of */}

        <div>
          <label htmlFor="birth-year">Birthyear</label>
          <select>
            <option value="1">Year</option>
          </select>
        </div>

        <div>
          <label>Month</label>
          <select>
            <option value="1">Month</option>
          </select>
        </div>

        <div>
          <label>Account Privacy</label>
          <input type="checkbox" name="Public" id="" />
          <input type="checkbox" name="Private" id="" />
        </div>

        <div>
          <label htmlFor="">Name</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" name="" id="" />
        </div>

        <div>
          <label htmlFor="">Number</label>
          <input type="tel" name="" id="" />
        </div>

        <div>
          <label htmlFor="">Area of interest</label>
          <input type="radio" name="Full-time" id="" />
          <input type="radio" name="Part-time" id="" />
        </div>

        <div>
          <label htmlFor="">Position</label>
          <select name="" id="">
            <option value="--select--">--select--</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Skills</label>
          <input type="text" name="" id="" />
        </div>

        <div>
          <label htmlFor="">Category</label>
          <select name="" id="">
            <option value="">--select--</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Category</label>
          <select name="" id="">
            <option value="">--select--</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Organization</label>
          <select name="" id="">
            <option value="">--select--</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Sector</label>
          <select name="" id="">
            <option value="">--select--</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Preffered Location</label>
          <input type="text" name="" id="" />
        </div>

        <div>
          <label htmlFor="">Updated detailed resume</label>
          <input type="file" name="" id="" />
        </div>

        <div>
          <label htmlFor="">Country</label>
          <select name="" id="">
            <option value="">--select--</option>
          </select>
        </div>

        <div>
          <label htmlFor="">State</label>
          <select name="" id="">
            <option value="">--select--</option>
          </select>
        </div>

        <div>
          <label htmlFor="">City</label>
          <select name="" id="">
            <option value="">--select--</option>
          </select>
        </div>
      </div>
    </div>
  );
}
