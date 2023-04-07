import React from "react";
import "../styles/Lower.css";
import MiddleContent from "./MiddleContent";

export default function Lower() {
  return (
    <div className="lower">
      <div className="box1">
        <MiddleContent title="Engagement Search and Interest" />
      </div>
      <div className="box2">
        <MiddleContent title="Investments" />
      </div>
      <div className="box3">
        <MiddleContent title="Insurance" />
      </div>
      <div className="box4">
        <MiddleContent title="Succession Planning" />
      </div>
    </div>
  );
}
