import React from "react";
import contentRoadmap from "/content/pages/learn/roadmap.yaml";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";

const Roadmap = () => {
  return (
    <div className="roadmap__main">
      <Halo />
      <StaticImage
        src="../../../assets/images/illus/background_img_roadmap.png"
        alt="background image"
        className="roadmap__background__image"
      />
      <h1 className="roadmap__title">{contentRoadmap.title}</h1>
    </div>
  );
};

export default Roadmap;
