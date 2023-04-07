import React from "react";
import "../styles/Middle3.css";
import img from "../assets/service_residential-options 1.png";

export default function Middle3() {
  return (
    <div className="middle3">
      <div>
        <h2>Investments</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          nemo, inventore, doloremque blanditiis, consectetur modi provident eum
          maiores illum fugiat perferendis quaerat error eaque nam!
        </p>
        <button>
          View Details <i class="fa-sharp fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
