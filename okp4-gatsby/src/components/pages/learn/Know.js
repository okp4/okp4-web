import * as React from "react";
import Halo from "../../animations/Halo.js";
import contentKnow from "/content/pages/learn/know.yaml";

const Know = () => (
  <div className="know__main">
    <Halo />
    <div className="wrapper">
      <div className="know__intro">
        <h1>{contentKnow.introPart.title}</h1>
        <p>{contentKnow.introPart.description}</p>
      </div>
    </div>
  </div>
);

export default Know;
