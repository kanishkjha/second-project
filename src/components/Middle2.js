import React from "react";
import "../styles/Middle2.css";
import img from "../assets/hs_home_link 1.png";

export default function Middle2() {
  return (
    <div className="middle2">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>Engagement Search & Interest</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          nemo, inventore, doloremque blanditiis, consectetur modi provident eum
          maiores illum fugiat perferendis quaerat error eaque nam!
        </p>
        <button>
          View Details <i class="fa-sharp fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
