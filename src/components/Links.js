import React from "react";
import logo from "../assets/Group 1.png";
import {
  FaPeopleArrows,
  FaMoneyCheck,
  FaListAlt,
  FaClipboardList,
  FaBloggerB,
  FaList,
} from "react-icons/fa";
import "../styles/Links.css";

export default function Links() {
  return (
    <div className="links">
      <div className="notout-logo">
        <img src={logo} alt="logo" />
        <h2>NotOut60</h2>
      </div>
      <div>
        <FaPeopleArrows className="icon flex-item" />
        <span className="flex-item">Engagement search and interest</span>
      </div>
      <div>
        <FaMoneyCheck className="icon flex-item" />
        <span className="flex-item">Investments</span>
      </div>
      <div>
        <FaListAlt className="icon flex-item" />
        <span className="flex-item">Insurance</span>
      </div>
      <div>
        <FaClipboardList className="icon flex-item" />
        <span className="flex-item">Succession Planing</span>
      </div>
      <div>
        <FaBloggerB className="icon flex-item" />
        <span className="flex-item">Blog</span>
      </div>
      <div>
        <FaList className="icon flex-item" />
        <span className="flex-item">Others</span>
      </div>
    </div>
  );
}
