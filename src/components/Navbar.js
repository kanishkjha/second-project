import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/Navbar.css";
import { SignupContext } from "../contexts/SignupModalState";

export default function Navbar() {
  const { dispatch } = useContext(SignupContext);
  return (
    <div className="navbar">
      <Link to="/createForm">Senior Signup/login</Link>
      <Link to="" onClick={() => dispatch({ type: "SHOW" })}>
        Employer Signup/login
      </Link>
      {/* <a href="https://www.google.com">Senior Signup/login</a>
      <a href="https://www.google.com">Employer Signup/login</a> */}
    </div>
  );
}
