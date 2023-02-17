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
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import * as ScrollManager from "../../../utils/ScrollManager.js";
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
  const [scrollState, setScrollState] = useState("scrollWords");
  const ref = useRef(null);
  const keywordsRef = useRef(null);
  const [keywordsInitialPos, setKeywordsInitialPos] = useState(0);
  const [mainKeywordIndex, setMainKeywordIndex] = useState(0);
  const keywords = content.featured.keywords;
  const landscapeRef = useRef(null);
  const protocolRef = useRef(null);
  const [cardRefs, setCardRefs] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);

  useEffect(() => {
    setKeywordsInitialPos(keywordsRef?.current?.getBoundingClientRect().top);
  }, []);

  const cardsLength = useMemo(() => content.protocol.cards.length, []);

  useEffect(
    () =>
      setCardRefs(
        Array(cardsLength)
          .fill()
          .map((_) => createRef())
      ),
    [cardsLength]
  );

  const handleScrollKeywords = useCallback(
    (e) => {
      e.preventDefault();
      if (e.deltaY < 0 && mainKeywordIndex > 0) {
        setMainKeywordIndex(mainKeywordIndex - 1);
      } else if (e.deltaY > 0 && mainKeywordIndex < keywords.length - 1) {
        setMainKeywordIndex(mainKeywordIndex + 1);
      }

      if (e.deltaY > 0 && mainKeywordIndex >= keywords.length - 1) {
        setScrollState("scrollPage");
      }
    },
    [keywords, mainKeywordIndex, setMainKeywordIndex, setScrollState]
  );

  const handleScrollCards = useCallback(
    (e) => {
      e.preventDefault();

      const isScrollDown = e.deltaY > 0;
      const isScrollUp = e.deltaY < 0;
      const firstCard = cardRefs[0].current;
      const lastCard = cardRefs[cardsLength - 1].current;

      if (isScrollDown) {
        if (activeCardIndex <= -1) {
          firstCard.classList.add("current");
          setActiveCardIndex(0);
        } else if (activeCardIndex >= cardsLength) {
          lastCard.classList.remove("current");
          setScrollState("scrollPage");
        } else {
          cardRefs[activeCardIndex]?.current.classList.remove("current");
          cardRefs[activeCardIndex + 1]?.current.classList.add("current");
          setActiveCardIndex(activeCardIndex + 1);
        }
      } else if (isScrollUp) {
        if (activeCardIndex >= cardsLength) {
          lastCard.classList.add("current");
          setActiveCardIndex(cardsLength - 1);
        } else if (activeCardIndex <= -1) {
          firstCard.classList.remove("current");
          setScrollState("scrollPage");
        } else {
          cardRefs[activeCardIndex]?.current.classList.remove("current");
          cardRefs[activeCardIndex - 1]?.current.classList.add("current");
          setActiveCardIndex(activeCardIndex - 1);
        }
      }
    },
    [cardRefs, activeCardIndex, setActiveCardIndex]
  );

  useEffect(() => {
    switch (scrollState) {
      case "scrollPage":
        ref?.current?.removeEventListener("wheel", handleScrollKeywords);
        ref?.current?.removeEventListener("wheel", handleScrollCards);
        break;
      case "scrollWords":
        if (ref && ref.current) {
          ref.current.addEventListener("wheel", handleScrollKeywords);
        }
        break;
      case "scrollCards":
        if (ref && ref.current) {
          ref.current.addEventListener("wheel", handleScrollCards);
        }
        break;
      default:
        ref?.current?.removeEventListener("wheel", handleScrollKeywords);
        ref?.current?.removeEventListener("wheel", handleScrollCards);
        break;
    }
    return () => {
      ref?.current?.removeEventListener("wheel", handleScrollKeywords);
      ref?.current?.removeEventListener("wheel", handleScrollCards);
    };
  }, [scrollState, ref, handleScrollKeywords, handleScrollCards]);

  const handleScroll = () => {
    if (
      keywordsInitialPos ===
        keywordsRef?.current?.getBoundingClientRect().top &&
      ScrollManager.isIntersectingViewport(keywordsRef?.current)
    ) {
      setScrollState("scrollWords");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="dataverse_gateways" ref={ref}>
      <Halo />
      <div className="wrapper">
        <div className="dg__first_page">
          <h1 className="dg__main_title">{content.title}</h1>

          <div className="dg__keywords" ref={keywordsRef}>
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

          <div className="dg__protocol--container">
            <figure className="dg__protocol">
              <div className="dg__protocol__cards_container" ref={protocolRef}>
                {content.protocol.cards.map((card, index) => (
                  <div
                    key={index}
                    className="dg__protocol__card"
                    ref={cardRefs[index]}
                  >
                    <motion.div
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
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataverseGateways;
