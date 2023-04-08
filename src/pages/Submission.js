import React from "react";
import "../styles/Submission.css";
import {
  FaCheckSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Submission() {
  return (
    <div className="submission">
      <div className="submission-wrapper">
        <FaCheckSquare size={100} className="font-square" />
        <div className="border-bottom">
          <h2>Registration completed successfully</h2>
          <p>Please check your registered email for email verification</p>
        </div>
        <div>
          <h3>Connect with us with the latest engagement updates</h3>
          <div>
            <FaFacebookSquare className="icons" size={20} />
            <FaTwitterSquare className="icons" size={20} />
            <FaLinkedin className="icons" size={20} />
            <FaInstagram className="icons" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
