import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/createForm">Senior Signup/login</Link>
      <Link to="">Employer Signup/login</Link>
      {/* <a href="https://www.google.com">Senior Signup/login</a>
      <a href="https://www.google.com">Employer Signup/login</a> */}
    </div>
  );
}
