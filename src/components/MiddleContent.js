import React from "react";
import "../styles/MiddleContent.css";

export default function MiddleContent({ title }) {
  return (
    <div className="middle-content">
      <h2>{title}</h2>
      <h3>Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>

      <h4>Lorem ipsum dolor sit.</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
        incidunt? Distinctio error exercitationem officiis! Labore!
      </p>

      <h4>Lorem ipsum dolor sit.</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam,
        unde ratione aperiam asperiores possimus.
      </p>

      <h4>Lorem ipsum dolor sit.</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
        ullam est sed rerum tempora reprehenderit.
      </p>

      <h4>Lorem ipsum dolor sit.</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sint,
        libero perferendis possimus ea quis.
      </p>
    </div>
  );
}
