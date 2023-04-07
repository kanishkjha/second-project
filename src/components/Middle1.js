import React from "react";
import img from "../assets/age 1.png";
import "../styles/Middle1.css";

export default function Middle1() {
  return (
    <div className="middle">
      <div>
        <h2>Make most of your retirement</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-solid fa-square"></i> Lorem
          ipsum dolor sit amet consectetur.
        </p>
        <p>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-solid fa-square"></i> Lorem
          ipsum dolor sit amet consectetur.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rem
          dolorum possimus voluptates. Earum exercitationem labore vitae unde
          nisi excepturi?
        </p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
