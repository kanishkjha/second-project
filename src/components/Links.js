import React from "react";
import logo from "../assets/Group 1.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
        <Link to="/" className="flex-item">
          Engagement search and interest
        </Link>
      </div>
      <div>
        <FaMoneyCheck className="icon flex-item" />
        <Link to="/" className="flex-item">
          Investments
        </Link>
      </div>
      <div>
        <FaListAlt className="icon flex-item" />
        <Link to="/insurance" className="flex-item">
          Insurance
        </Link>
      </div>
      <div>
        <FaClipboardList className="icon flex-item" />
        <Link to="/jobs" className="flex-item">
          Succession Planing
        </Link>
      </div>
      <div>
        <FaBloggerB className="icon flex-item" />
        <Link to="/blog" className="flex-item">
          Blog
        </Link>
      </div>
      <div>
        <FaList className="icon flex-item" />
        <Link to="" className="flex-item">
          Others
        </Link>
      </div>
    </div>
  );
}
