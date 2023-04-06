import React from "react";
import "../styles/Last.css";
import img from "../assets/Group 1.png";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

export default function Last() {
  return (
    <div className="last">
      <div className="flex-container">
        <div>
          <div className="logo">
            <img src={img} alt="" />
            <h2>NotOut60</h2>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
            facere aut hic, quisquam, nisi consequatur officia atque enim
            aliquam nam dolores eum dolor voluptas nostrum earum molestiae saepe
            odio non!
          </p>

          <div className="grid">
            <FaMobileAlt className="icon" size={48} />
            <span>+91-8860493500</span>
          </div>

          <div className="grid">
            <FaEnvelope className="icon" size={48} />
            <span>info@notout60.com</span>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>Engagement Search</li>
            <li>Investments</li>
            <li>Insurance</li>
            <li>Succession Planning</li>
            <li>Others</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div>
          <h4>Employers</h4>
          <ul>
            <li>Browse Engagement</li>
            <li>Post an Engagement</li>
            <li>Employers Login</li>
          </ul>
        </div>
        <div>
          <h4>Useful Links</h4>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Refund and Cancellation Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
