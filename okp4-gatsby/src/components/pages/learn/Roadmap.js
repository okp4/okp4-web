import React, {
  useState,
  useCallback,
  useEffect,
  createRef,
  useRef,
} from "react";
import contentRoadmap from "/content/pages/learn/roadmap.yaml";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import ExpandIcon from "../../../assets/images/icons/expand.inline.svg";
import ExitIcon from "../../../assets/images/icons/exit-icon.inline.svg";
import * as ScrollManager from "../../../utils/ScrollManager";
import { useBreakpoint } from "../../../hook/useBreakpoint";

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
  const [scrollState, setScrollState] = useState("page");
  const { isMobile } = useBreakpoint();

  useEffect(() => {
    if (!isMobile) {
      ScrollManager.disableScroll();
    }
    return () => {
      ScrollManager.enableScroll();
    };
  }, [isMobile]);

  const handleWheelEvent = useCallback(
    (event) => {
      if (pageRef && scrollRef && cardsRef && !openedCardState) {
        if (!isMobile) {
          const scrollRate = 0.25;
          const viewportMiddle = window.innerHeight / 2;
          const cardsRect = cardsRef.current.getBoundingClientRect();
          const cardsMiddle = cardsRect.top + cardsRect.height / 2;
          const startOfScroll = scrollRef.current?.scrollLeft === 0;
          const endOfScroll =
            scrollRef.current?.scrollLeft +
              scrollRef.current?.clientWidth +
              100 >
            scrollRef.current?.scrollWidth;

          event.preventDefault();
          event.stopPropagation();

          const scrollHorizontally = () => {
            scrollState &&
              scrollRef.current?.scrollTo({
                left: scrollRef.current?.scrollLeft + event.deltaY * scrollRate,
              });
          };

          const scrollPage = (delta = event.deltaY) => {
            window.scrollTo({
              top: window.scrollY + delta * scrollRate,
            });
          };

          if (event.deltaY > 0) {
            if (scrollState === "page") {
              if (startOfScroll) {
                scrollPage(
                  event.deltaY > cardsRect.top ? cardsRect.top : event.deltaY
                );
              }
              if (endOfScroll) {
                scrollPage();
              }
            }
            if (cardsMiddle < viewportMiddle && !endOfScroll) {
              setScrollState("cards");
            } else {
              setScrollState("page");
            }
          } else if (event.deltaY < 0) {
            if (scrollState === "page") {
              scrollPage();
            }
            if (cardsRect.top > 0 && !startOfScroll) {
              setScrollState("cards");
            } else {
              setScrollState("page");
            }
          }
          if (scrollState === "cards") {
            scrollHorizontally();
          }
        }

        const scrollProgress =
          scrollRef.current?.scrollLeft /
          (scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth);

        document.body.style.setProperty("--scroll", scrollProgress);
      }
    },
    [pageRef, scrollRef, openedCardState, scrollState, isMobile]
  );

  useEffect(() => {
    window?.addEventListener("wheel", handleWheelEvent, { passive: false });
    return () => {
      window?.removeEventListener("wheel", handleWheelEvent);
    };
  }, [handleWheelEvent]);

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
    [setOpenedCardState]
  );

  useEffect(() => {
    if (openedCardState) {
      if (!isMobile) {
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
  }, [openedCardState, refs, isMobile]);

  const handleCardTransitionEnd = useCallback(() => {
    if (openedCardState) {
      if (!isMobile) {
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
  }, [openedCardState, refs, isMobile]);

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
  }, [openedCardState, refs, handleCardTransitionEnd]);

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
