import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Halo from "../../animations/Halo.js";
import content from "/content/pages/explore/dataverse-gateways.yaml";
import Parallax from "../../animations/Parallax.js";
import { useBreakpoint } from "../../../hook/useBreakpoint";

const parallaxLandscapeCard = [100, 150, 50, 125];

const DataverseGateways = ({ files }) => {
  const protocolRef = useRef(null);
  const { isLarge } = useBreakpoint();

  React.useEffect(() => {
    if (protocolRef) {
      const containerScrollWidth = protocolRef.current.scrollWidth;
      protocolRef.current.scrollLeft =
        (containerScrollWidth - protocolRef.current.clientWidth) / 2;
    }
  }, [protocolRef]);

  return (
    <div className="dataverse_gateways">
      <Halo />
      <div className="wrapper">
        <div className="dg__first_page">
          <h1 className="dg__main_title">{content.title}</h1>
          <p className="introduction">{content.featured.introduction}</p>
          <div className="keywords--container">
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

          <div className="dg__landscape__cards">
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
                    src="../../../assets/images/illus/explore/protocol-book.webp"
                    alt="OKP4 Protocol"
                  />
                </div>
                <div className="dg__protocol__book--element page page1">
                  <StaticImage
                    className="imgWrapper"
                    imgClassName="img"
                    objectFit="contain"
                    src="../../../assets/images/illus/explore/protocol-page-lb.webp"
                    alt="OKP4 Protocol"
                  />
                </div>
                <div className="dg__protocol__book--element page page2">
                  <StaticImage
                    className="imgWrapper"
                    imgClassName="img"
                    objectFit="contain"
                    src="../../../assets/images/illus/explore/protocol-page-lt.webp"
                    alt="OKP4 Protocol"
                  />
                </div>
                <div className="dg__protocol__book--element page page3">
                  <StaticImage
                    className="imgWrapper"
                    imgClassName="img"
                    objectFit="contain"
                    src="../../../assets/images/illus/explore/protocol-page-rb.webp"
                    alt="OKP4 Protocol"
                  />
                </div>
                <div className="dg__protocol__book--element page page4">
                  <StaticImage
                    className="imgWrapper"
                    imgClassName="img"
                    objectFit="contain"
                    src="../../../assets/images/illus/explore/protocol-page-rt.webp"
                    alt="OKP4 Protocol"
                  />
                </div>
              </div>
            </div>
            <div className="dg__protocol__cards--container" ref={protocolRef}>
              <div className="dg__protocol__cards">
                {content.protocol.cards.map((card, index) => {
                  const cardContent = (
                    <GatsbyImage
                      image={MediaManager.GetImage("explore/" + card, files)}
                      alt={card}
                    />
                  );
                  const baseProps = {
                    key: index,
                    className: `dg__protocol__card offset-${index}`,
                    style: { height: "fit-content" },
                  };
                  return isLarge ? (
                    <motion.div
                      {...baseProps}
                      whileHover={{
                        scale: 1.6,
                        zIndex: 100,
                        y: "30%",
                        marginInline: "40px",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {cardContent}
                    </motion.div>
                  ) : (
                    <div {...baseProps}>{cardContent}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataverseGateways;
