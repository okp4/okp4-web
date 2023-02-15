import React, {
  useState,
  useCallback,
  useEffect,
  createRef,
  useRef,
} from "react";
import contentRoadmap from "/content/pages/learn/roadmap.yaml";
import * as ResponsiveManager from "../../../utils/ResponsiveManager.js";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import ExpandIcon from "../../../assets/images/icons/expand.inline.svg";
import ExitIcon from "../../../assets/images/icons/exit-icon.inline.svg";
import * as ScrollManager from "../../../utils/ScrollManager";

const Card = ({
  title,
  period,
  introduction,
  description,
  handleCardClose,
  handleCardOpen,
  timeline,
  isOpen,
  buttonDisabled,
  cardIndex,
  cardRef,
}) => (
  <div
    className={classNames("roadmap__card", title, {
      opened: isOpen,
      closed: !isOpen,
    })}
    key={title}
    ref={cardRef}
  >
    {isOpen ? (
      <div className="roadmap__card__opened__wrapper">
        <div className="roadmap__card__opened__content">
          <div className="roadmap__card__opened__header">
            <p className="roadmap__card__title">{title}</p>
            <p className="roadmap__card__period">{period}</p>
          </div>
          <p className="roadmap__card__introduction">{introduction}</p>
          <div
            className="roadmap__card__description"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          {timeline.map(({ year, milestones }, index) => (
            <div className="roadmap__card__timeline" key={index}>
              <p className="roadmap__card__year">{year}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: milestones,
                }}
              />
            </div>
          ))}
        </div>
        <div
          className={classNames("roadmap__card__opened__image__wrapper", title)}
        >
          <div className="roadmap__card__opened__image__content">
            <p className="roadmap__card__period">{period}</p>
            <button
              className="roadmap__card__opened__close"
              onClick={handleCardClose}
            >
              <ExitIcon />
            </button>
          </div>
        </div>
      </div>
    ) : (
      <>
        <p className="roadmap__card__period">{period}</p>
        <div className="roadmap__card__content__wrapper">
          <p className="roadmap__card__title">{title}</p>
          <button
            disabled={buttonDisabled}
            className="roadmap__card__button"
            onClick={handleCardOpen(title, cardIndex)}
          >
            Discover
            <ExpandIcon />
          </button>
        </div>
      </>
    )}
  </div>
);

const Roadmap = () => {
  const [openedCardState, setOpenedCardState] = useState(null);
  const [refs, setRefs] = useState([]);
  const pageRef = useRef();
  const cardsRef = useRef();
  const scrollRef = useRef();

  const handleWheelEvent = useCallback(
    (event) => {
      if (scrollRef && cardsRef && !openedCardState) {
        if (ResponsiveManager.isWindowLarger("lg")) {
          const viewportMiddle = window.innerHeight / 2;
          const cardsRect = cardsRef.current.getBoundingClientRect();
          const cardsMiddle = cardsRect.top + cardsRect.height / 2;
          const endOfScroll =
            scrollRef.current?.scrollLeft +
              scrollRef.current?.clientWidth +
              100 >
            scrollRef.current?.scrollWidth;

          const scrollHorizontally = () => {
            !openedCardState &&
              scrollRef.current?.scrollTo({
                left: scrollRef.current?.scrollLeft + event.deltaY,
              });
          };

          if (event.deltaY > 0) {
            if (cardsMiddle < viewportMiddle && !endOfScroll) {
              ScrollManager.disableScroll();
              event.preventDefault();
              event.stopPropagation();
              scrollHorizontally();
            } else {
              ScrollManager.enableScroll();
            }
          } else {
            if (cardsRect.top > 0 && scrollRef.current?.scrollLeft !== 0) {
              ScrollManager.disableScroll();
              event.preventDefault();
              event.stopPropagation();
              scrollHorizontally();
            } else {
              ScrollManager.enableScroll();
            }
          }
        }

        const scrollProgress =
          scrollRef.current?.scrollLeft /
          (scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth);

        document.body.style.setProperty("--scroll", scrollProgress);
      }
      openedCardState && ResponsiveManager.isWindowLarger("lg")
        ? ScrollManager.disableScroll()
        : ScrollManager.enableScroll();
    },
    [scrollRef, openedCardState]
  );

  useEffect(() => {
    const current = pageRef.current;
    current?.addEventListener("wheel", handleWheelEvent);
    return () => {
      current?.removeEventListener("wheel", handleWheelEvent);
      ScrollManager.enableScroll();
    };
  }, [pageRef, handleWheelEvent]);

  useEffect(() => {
    setRefs(
      Array(contentRoadmap.cards.length)
        .fill()
        .map((_) => createRef())
    );
  }, [setRefs]);

  const handleCardOpen = useCallback(
    (cardTitle, cardIndex) => () => {
      setOpenedCardState({ title: cardTitle, id: cardIndex });
    },
    [setOpenedCardState, refs]
  );

  useEffect(() => {
    if (openedCardState?.id) {
      if (ResponsiveManager.isWindowLarger("lg")) {
        refs[openedCardState.id].current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } else {
        refs[openedCardState.id].current?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }
  }, [openedCardState, refs]);

  const handleCardTransitionEnd = useCallback(() => {
    if (openedCardState?.id) {
      if (ResponsiveManager.isWindowLarger("lg")) {
        refs[openedCardState.id].current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } else {
        refs[openedCardState.id].current?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }
  }, [openedCardState, refs]);

  useEffect(() => {
    refs[openedCardState?.id]?.current?.addEventListener(
      "transitionend",
      handleCardTransitionEnd
    );
    return () => {
      refs[openedCardState?.id]?.current?.removeEventListener(
        "transitionend",
        handleCardTransitionEnd
      );
    };
  }, [openedCardState, refs]);

  const handleCardClose = useCallback(() => {
    setOpenedCardState(null);
  }, [setOpenedCardState]);

  return (
    <div className="roadmap__main" ref={pageRef}>
      <Halo />
      <StaticImage
        src="../../../assets/images/illus/background_img_roadmap.png"
        alt="background image"
        className="roadmap__background__image"
      />
      <h1 className="roadmap__title--mobile">{contentRoadmap.title}</h1>
      <div
        ref={scrollRef}
        className={classNames(
          "roadmap__content__wrapper",
          openedCardState?.title,
          {
            "cards-only": openedCardState?.title,
          }
        )}
      >
        <h1 className="roadmap__title">{contentRoadmap.title}</h1>

        <div
          ref={cardsRef}
          className={classNames("roadmap__cards", {
            "card-opened": openedCardState?.title,
          })}
        >
          {contentRoadmap.cards.map(
            ({ title, period, introduction, description, timeline }, index) => (
              <Card
                key={title}
                title={title}
                period={period}
                introduction={introduction}
                description={description}
                handleCardClose={handleCardClose}
                handleCardOpen={handleCardOpen}
                timeline={timeline}
                isOpen={openedCardState?.title === title}
                buttonDisabled={!!openedCardState}
                cardIndex={index}
                cardRef={refs[index]}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
