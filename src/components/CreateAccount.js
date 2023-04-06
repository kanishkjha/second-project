import React from "react";
import "../styles/CreateAccount.css";
import img from "../accessories/man-with-phone.jpeg";

export default function CreateAccount() {
  return (
    <div className="create-account">
      <div className="first">
        <h3>&nbsp;&nbsp;Create an account( It's free)</h3>
        <p>It only takes couple of minutes to get started.</p>
      </div>
      <div className="second">
        <img src={img} alt="man-with-the-phone" />
      </div>
    </div>
  );
}
