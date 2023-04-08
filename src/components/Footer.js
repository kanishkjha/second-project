import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <p>Copyright &copy; 2023</p>
      <p>
        <span>Follow us: </span>
        <FaInstagramSquare className="icon" size={16} />
        <FaFacebookSquare className="icon" size={16} />
        <FaTwitterSquare className="icon" size={16} />
        <FaLinkedin className="icon" size={16} />
      </p>
    </div>
  );
}
