import * as React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Halo from "../../animations/Halo.js";
import content from "/content/pages/explore/dataverse-gateways.yaml";
import Parallax from "../../animations/Parallax.js";

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

const Keyword = ({ keywords, mainIndex, distance }) => (
  <div className={`keyword`}>
    {keywords[(keywords.length + mainIndex + distance) % keywords.length]}
  </div>
);

const DataverseGateways = ({ files }) => {
  const ref = useRef(null);
  const [scrollState, setScrollState] = useState("scrollWords");
  const [mainKeywordIndex, setMainKeywordIndex] = useState(0);
  const keywords = content.featured.keywords;

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();

      if (e.deltaY < 0 && mainKeywordIndex > 0) {
        setMainKeywordIndex(mainKeywordIndex - 1);
      } else if (e.deltaY > 0 && mainKeywordIndex < keywords.length - 1) {
        setMainKeywordIndex(mainKeywordIndex + 1);
      }
    },
    [keywords, mainKeywordIndex, setMainKeywordIndex]
  );

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener("wheel", handleWheel);
    }
    // if (scrollState === "scrollPage") {
    //   ref?.current?.removeEventListener("wheel", handleWheel);
    // }
    return () => {
      ref?.current?.removeEventListener("wheel", handleWheel);
    };
  }, [ref, handleWheel]);

  return (
    <div className="dataverse_gateways" ref={ref}>
      <Halo />
      <div className="wrapper">
        <div className="dg__first_page">
          <h1 className="dg__main_title">{content.title}</h1>
          <div className="dg__keywords">
            <div className="dg__keywords__container">
              <p className="introduction">{content.featured.introduction}</p>
              <div className="keywords--container">
                <div className="keywords">
                  <div className="keywords--aside keywords--previous">
                    {[-3, -2, -1].map((distance) => (
                      <Keyword
                        key={distance}
                        keywords={keywords}
                        mainIndex={mainKeywordIndex}
                        distance={distance}
                      />
                    ))}
                  </div>
                  <div>
                    <Keyword
                      keywords={keywords}
                      mainIndex={mainKeywordIndex}
                      distance={0}
                    />
                  </div>
                  <div className="keywords--aside keywords--next">
                    {[1, 2, 3].map((distance) => (
                      <Keyword
                        key={distance}
                        keywords={keywords}
                        mainIndex={mainKeywordIndex}
                        distance={distance}
                      />
                    ))}
                  </div>
                </div>
              </div>
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
            <div className="dg__protocol__cards_container">
              {content.protocol.cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="dg__protocol__card"
                  whileHover={{ scale: 1.7 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    marginTop: `${cardStyles[index].margin}px`,
                    rotate: `${cardStyles[index].rotate}deg`,
                  }}
                >
                  <GatsbyImage
                    image={MediaManager.GetImage("explore/" + card, files)}
                    alt={card}
                  />
                </motion.div>
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
};

export default DataverseGateways;
