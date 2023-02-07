import React from "react";
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
    </div>
  );
};

export default Roadmap;
