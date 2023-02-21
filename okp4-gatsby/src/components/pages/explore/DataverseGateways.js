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

const Keyword = ({ keywords, mainIndex, distance }) => (
  <div className={`keyword`}>
    {keywords[(keywords.length + mainIndex + distance) % keywords.length]}
  </div>
);

const DataverseGateways = ({ files }) => {
  const [scrollState, setScrollState] = useState("scrollWords");
  const ref = useRef(null);
  const firstPageRef = useRef(null);
  const keywordsContainerRef = useRef(null);
  const [mainKeywordIndex, setMainKeywordIndex] = useState(3);
  const keywords = [
    ...content.featured.keywords.slice(-3),
    ...content.featured.keywords,
    ...content.featured.keywords.slice(0, 3),
  ];
  const [keywordRefs, setKeywordRefs] = useState([]);
  const landscapeRef = useRef(null);
  const protocolRef = useRef(null);
  const [cardRefs, setCardRefs] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const { isLarge } = useBreakpoint();

  useEffect(
    () =>
      setKeywordRefs(
        Array(keywords.length)
          .fill()
          .map((_) => createRef())
      ),
    [keywords.length]
  );

  const cardsLength = useMemo(() => content.protocol.cards.length, []);

  useEffect(() => {
    keywordRefs[mainKeywordIndex]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [keywordRefs, mainKeywordIndex]);

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
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      const scrollHorizontally = () => {
        keywordsContainerRef.current?.scrollBy({
          left: event.deltaY,
          behavior: "smooth",
        });
      };

      const scrollPage = (delta = event.deltaY) => {
        window.scrollTo({
          top: window.scrollY + delta,
          behavior: "smooth",
        });
      };

      if (event.deltaY < 0 && mainKeywordIndex > 3) {
        setMainKeywordIndex(mainKeywordIndex - 1);
        scrollHorizontally();
      } else if (event.deltaY > 0 && mainKeywordIndex < keywords.length - 4) {
        setMainKeywordIndex(mainKeywordIndex + 1);
        scrollHorizontally();
      }

      if (event.deltaY > 0 && mainKeywordIndex >= keywords.length - 4) {
        setScrollState("scrollPage");
        scrollPage();
      }

      if (scrollState === "scrollPage") {
        scrollPage();
      }
    },
    [
      keywords,
      mainKeywordIndex,
      setMainKeywordIndex,
      scrollState,
      setScrollState,
    ]
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
        ScrollManager.enableScroll();
        break;
      case "scrollWords":
        if (ref && ref.current) {
          ref.current.addEventListener("wheel", handleScrollKeywords);
          ScrollManager.disableScroll();
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
      ScrollManager.enableScroll();
    };
  }, [scrollState, ref, handleScrollKeywords, handleScrollCards]);

  const handleScroll = () => {
    const firstPageRect = firstPageRef?.current?.getBoundingClientRect();
    const viewportBottom = window.innerHeight;
    const firstPageBottom = firstPageRect.top + firstPageRect.height;
    const isFirstPageToBottom = firstPageBottom >= viewportBottom;
    if (isFirstPageToBottom) {
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
        <div className="dg__first_page" ref={firstPageRef}>
          <h1 className="dg__main_title">{content.title}</h1>

          <div className="dg__keywords">
            <div className="dg__keywords__container">
              <div className="keywords_color_layer" />
              <p className="introduction">{content.featured.introduction}</p>
              <div className="keywords--container" ref={keywordsContainerRef}>
                <div className="keywords">
                  {keywords.map((keyword, index) => (
                    <div
                      key={index}
                      ref={keywordRefs[index]}
                      className={classNames("keyword", {
                        mainKeyword: index === mainKeywordIndex,
                      })}
                    >
                      {keyword}
                    </div>
                  ))}
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
