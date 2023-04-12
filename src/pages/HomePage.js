import React from "react";
import Middle1 from "../components/Middle1";
import Middle2 from "../components/Middle2";
import Middle3 from "../components/Middle3";
import Middle4 from "../components/Middle4";
import Middle5 from "../components/Middle5";
import Lower from "../components/Lower";
import SecondLast from "../components/SecondLast";

export default function HomePage() {
  return (
    <div>
      <Middle1 />
      <Middle2 />
      <Middle3 />
      <Middle4 />
      <Middle5 />
      <Lower />
      <SecondLast />
    </div>
  );
}
