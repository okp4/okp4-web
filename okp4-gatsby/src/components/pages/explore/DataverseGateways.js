import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Halo from "../../animations/Halo.js";
import content from "/content/pages/explore/dataverse-gateways.yaml";
import Parallax from "../../animations/Parallax.js";

const parallaxLandscapeCard = [100, 150, 50, 125];

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
              parallaxStart={parallaxLandscapeCard[index]}
              parallaxEnd={-parallaxLandscapeCard[index]}
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

        <div className="dg__protocol">
          <div className="dg__protocol__cards_container">
            {content.protocol.cards.map((card) => (
              <div className="dg__protocol__card">
                <GatsbyImage
                  image={MediaManager.GetImage("explore/" + card, files)}
                  alt={card}
                />
              </div>
            ))}
          </div>
          <div className="dg__protocol__book">
            <div className="dg__protocol__book--element">
              <GatsbyImage
                image={MediaManager.GetImage(
                  "explore/protocol-book.png",
                  files
                )}
                alt="OKP4 Protocol"
              />
            </div>
            <div className="dg__protocol__book--element page page1">
              <GatsbyImage
                image={MediaManager.GetImage(
                  "explore/protocol-page-lb.png",
                  files
                )}
                alt="OKP4 Protocol"
              />
            </div>
            <div className="dg__protocol__book--element page page2">
              <GatsbyImage
                image={MediaManager.GetImage(
                  "explore/protocol-page-lt.png",
                  files
                )}
                alt="OKP4 Protocol"
              />
            </div>
            <div className="dg__protocol__book--element page page3">
              <GatsbyImage
                image={MediaManager.GetImage(
                  "explore/protocol-page-rb.png",
                  files
                )}
                alt="OKP4 Protocol"
              />
            </div>
            <div className="dg__protocol__book--element page page4">
              <GatsbyImage
                image={MediaManager.GetImage(
                  "explore/protocol-page-rt.png",
                  files
                )}
                alt="OKP4 Protocol"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DataverseGateways;
