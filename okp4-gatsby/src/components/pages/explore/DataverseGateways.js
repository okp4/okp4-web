import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Halo from "../../animations/Halo.js";
import content from "/content/pages/explore/dataverse-gateways.yaml";
import Parallax from "../../animations/Parallax.js";

const parallax = [100, 150, 50, 125];

const DataverseGateways = ({ files }) => (
  <div className="dataverse_gateways">
    <Halo />
    <div className="wrapper">
      <div className="dg__first_page">
        <h1 className="dg__main_title">{content.title}</h1>
        <div className="dg__keywords__container"></div>
      </div>
      <div className="dg__landscape">
        <h2>{content.landscape.title}</h2>
        <p className="dg__landscape__introduction">
          {content.landscape.introduction}
        </p>

        <div className="dg__landscape__cards">
          {content.landscape.cards.map((card, index) => (
            <Parallax
              classContainer="dg__landscape__cards__item"
              parallaxStart={parallax[index]}
              parallaxEnd={-parallax[index]}
              parallaxMiddle="0.5"
            >
              <div
                className="dg__landscape__cards__item__image"
                data-infinite="1"
              >
                <GatsbyImage
                  image={MediaManager.GetImage("explore/" + card.image, files)}
                  alt={card.title}
                />
              </div>
              <div className="dg__landscape__cards__item__text">
                <p className="title">{card.title}</p>
                <p className="text">{card.text}</p>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DataverseGateways;
