import * as React from "react";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Halo from "../../animations/Halo.js";
import content from "/content/pages/explore/dataverse-gateways.yaml";
import Parallax from "../../animations/Parallax.js";
import { useBreakpoint } from "../../../hook/useBreakpoint";

const parallaxLandscapeCard = [100, 150, 50, 125];

const DataverseGateways = ({ files }) => {
  const ref = useRef(null);
  const landscapeRef = useRef(null);
  const firstPageRef = useRef(null);
  const protocolRef = useRef(null);
  const keywordsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  React.useEffect(() => {
    if (protocolRef) {
      const containerScrollWidth = protocolRef.current.scrollWidth;
      console.log(protocolRef.current);
      protocolRef.current.scrollLeft =
        (containerScrollWidth - protocolRef.current.clientWidth) / 2;
    }
  }, [protocolRef]);

  return (
    <div className="dataverse_gateways" ref={ref}>
      <Halo />
      <div className="wrapper">
        <div className="dg__first_page" ref={firstPageRef}>
          <h1 className="dg__main_title">{content.title}</h1>
          <p className="introduction">{content.featured.introduction}</p>
          <div className="keywords--container" ref={keywordsContainerRef}>
            <div className="halo" />
            <div className="keywords">
              <div className="keyword share">Share & Contribute</div>
              <div className="keyword benefit">Benefit & earn</div>
              <div className="keyword interact">Interact</div>
              <div className="keyword build">Build</div>
            </div>
          </div>
        </div>

        <div className="dg__landscape">
          <h2>{content.landscape.title}</h2>
          <p className="dg__landscape__introduction">
            {content.landscape.introduction}
          </p>

          <div className="dg__landscape__cards" ref={landscapeRef}>
            {content.landscape.cards.map((card, index) => (
              <Parallax
                key={index}
                classContainer="dg__landscape__cards__item"
                parallaxStart={parallaxLandscapeCard[index]}
                parallaxEnd={-parallaxLandscapeCard[index]}
                parallaxMiddle="0.5"
                size="xxl"
              >
                <div className="dg__landscape__cards__item__image">
                  <GatsbyImage
                    image={MediaManager.GetImage(
                      "explore/" + card.image,
                      files
                    )}
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
            <div className="dg__protocol__book--container">
              <div className="dg__protocol__book">
                <div className="dg__protocol__book--element">
                  <StaticImage
                    className="imgWrapper"
                    imgClassName="img"
                    objectFit="contain"
                    src="../../../assets/images/illus/explore/protocol-book.png"
                    alt="OKP4 Protocol"
                  />
                </div>
                <div className="dg__protocol__book--element page page1">
                  <StaticImage
                    className="imgWrapper"
                    imgClassName="img"
                    objectFit="contain"
                    src="../../../assets/images/illus/explore/protocol-page-lb.png"
                    alt="OKP4 Protocol"
                  />
                </div>
                <div className="dg__protocol__book--element page page2">
                  <StaticImage
                    className="imgWrapper"
                    imgClassName="img"
                    objectFit="contain"
                    src="../../../assets/images/illus/explore/protocol-page-lt.png"
                    alt="OKP4 Protocol"
                  />
                </div>
                <div className="dg__protocol__book--element page page3">
                  <StaticImage
                    className="imgWrapper"
                    imgClassName="img"
                    objectFit="contain"
                    src="../../../assets/images/illus/explore/protocol-page-rb.png"
                    alt="OKP4 Protocol"
                  />
                </div>
                <div className="dg__protocol__book--element page page4">
                  <StaticImage
                    className="imgWrapper"
                    imgClassName="img"
                    objectFit="contain"
                    src="../../../assets/images/illus/explore/protocol-page-rt.png"
                    alt="OKP4 Protocol"
                  />
                </div>
              </div>
            </div>
            <div className="dg__protocol__cards--container" ref={protocolRef}>
              <div className="dg__protocol__cards">
                {content.protocol.cards.map((card, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.7, zIndex: 100 }}
                    transition={{ duration: 0.2 }}
                    style={{ height: "fit-content" }}
                  >
                    <div
                      key={index}
                      className={`dg__protocol__card offset-${index}`}
                      ref={cardRefs[index]}
                    >
                      <GatsbyImage
                        image={MediaManager.GetImage("explore/" + card, files)}
                        alt={card}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataverseGateways;
