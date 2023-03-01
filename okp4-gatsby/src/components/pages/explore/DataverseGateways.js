import * as React from "react";
import {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  createRef,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import * as ScrollManager from "../../../utils/ScrollManager.js";
import Halo from "../../animations/Halo.js";
import content from "/content/pages/explore/dataverse-gateways.yaml";
import Parallax from "../../animations/Parallax.js";
import classNames from "classnames";
import { useBreakpoint } from "../../../hook/useBreakpoint";

const parallaxLandscapeCard = [100, 150, 50, 125];
const cardStyles = [
  {
    margin: 57,
    rotate: -10,
  },
  {
    margin: 35,
    rotate: -7.5,
  },
  {
    margin: 20,
    rotate: -5,
  },
  {
    margin: 10,
    rotate: -2.5,
  },
  {
    margin: 0,
    rotate: 0,
  },
  {
    margin: 10,
    rotate: 2.5,
  },
  {
    margin: 20,
    rotate: 5,
  },
  {
    margin: 35,
    rotate: 7.5,
  },
  {
    margin: 57,
    rotate: 10,
  },
];

const DataverseGateways = ({ files }) => {
  const ref = useRef(null);
  const landscapeRef = useRef(null);
  const firstPageRef = useRef(null);
  const protocolRef = useRef(null);
  const keywordsContainerRef = useRef(null);
  const { isLarge } = useBreakpoint();
  const cardRefs = useRef([]);

  const mainKeywordIndex = 0;

  const keywords = useMemo(() => content.featured.keywords, []);

  const cardsLength = useMemo(() => content.protocol.cards.length, []);

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
            <div className="dg__protocol__cards--container" ref={protocolRef}>
              <div className="dg__protocol__cards" ref={protocolRef}>
                {content.protocol.cards.map((card, index) => (
                  <div
                    key={index}
                    className="dg__protocol__card"
                    ref={cardRefs[index]}
                  >
                    <motion.div
                      whileHover={{ scale: 1.7 }}
                      transition={{ duration: 0.2 }}
                      style={
                        isLarge && {
                          marginTop: `${cardStyles[index].margin}px`,
                          rotate: `${cardStyles[index].rotate}deg`,
                        }
                      }
                    >
                      <GatsbyImage
                        image={MediaManager.GetImage("explore/" + card, files)}
                        alt={card}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataverseGateways;
