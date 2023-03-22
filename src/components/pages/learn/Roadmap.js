import React, {
  useState,
  useCallback,
  useEffect,
  createRef,
  useRef,
} from "react";
import contentRoadmap from "/content/pages/learn/roadmap.yaml";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import ExpandIcon from "../../../assets/images/icons/expand.inline.svg";
import ExitIcon from "../../../assets/images/icons/cross.inline.svg";
import * as ScrollManager from "../../../utils/ScrollManager";
import { useBreakpoint } from "../../../hook/useBreakpoint";
import { useOnEventOutside } from "../../../hook/useOnEventOutside.js";

const Card = ({
  title,
  period,
  introduction,
  description,
  handleCardClose,
  handleCardOpen,
  timeline,
  isOpen,
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
  const cardsRef = useRef();
  const scrollRef = useRef();
  const [scrollState, setScrollState] = useState("page");
  const { isLarge } = useBreakpoint();

  const resetCardsScroll = useCallback(() => {
    if (isLarge && scrollRef && window.scrollY === 0) {
      scrollRef.current?.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, [isLarge, scrollRef]);

  useEffect(() => {
    window.addEventListener("scroll", resetCardsScroll);
    return () => window.removeEventListener("scroll", resetCardsScroll);
  }, [resetCardsScroll]);

  useEffect(() => {
    isLarge && ScrollManager.disableScroll();
    return () => {
      ScrollManager.enableScroll();
    };
  }, [isLarge]);

  const handleWheelEvent = useCallback(
    (event) => {
      if (scrollRef && cardsRef && !openedCardState) {
        if (isLarge && event.type === "wheel") {
          const scrollRate = 0.25;
          const viewportBottom = window.innerHeight;
          const cardsRect = cardsRef.current?.getBoundingClientRect();
          const cardsBottom = cardsRect.top + cardsRect.height;
          const startOfScroll = scrollRef.current?.scrollLeft === 0;
          const endOfScroll =
            scrollRef.current?.scrollLeft +
              scrollRef.current?.clientWidth +
              100 >
            scrollRef.current?.scrollWidth;

          event.preventDefault();
          event.stopPropagation();

          const scrollHorizontally = () => {
            scrollRef.current?.scrollTo({
              left: scrollRef.current?.scrollLeft + event.deltaY * scrollRate,
            });
          };

          const scrollPage = (delta = event.deltaY) => {
            window.scrollTo({
              top: window.scrollY + delta * scrollRate,
            });
          };

          scrollState === "page" && scrollPage();
          if (event.deltaY > 0) {
            cardsBottom < viewportBottom && !endOfScroll
              ? setScrollState("cards")
              : setScrollState("page");
          } else {
            cardsRect.top > 0 && !startOfScroll
              ? setScrollState("cards")
              : setScrollState("page");
          }
          scrollState === "cards" && scrollHorizontally();
        }

        const scrollProgress =
          scrollRef.current?.scrollLeft /
          (scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth);

        document.body.style.setProperty(
          "--scroll",
          scrollProgress < 0 ? 0 : scrollProgress
        );
      }
    },
    [scrollRef, openedCardState, scrollState, isLarge]
  );

  useEffect(() => {
    window?.addEventListener("wheel", handleWheelEvent, { passive: false });
    window?.addEventListener("touchmove", handleWheelEvent);
    return () => {
      window?.removeEventListener("wheel", handleWheelEvent);
      window?.removeEventListener("touchmove", handleWheelEvent);
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
      if (isLarge) {
        refs[openedCardState.id].current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "center",
        });
      } else {
        refs[openedCardState.id].current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [openedCardState, refs, isLarge]);

  const handleCardTransitionEnd = useCallback(() => {
    if (openedCardState) {
      if (isLarge) {
        refs[openedCardState.id].current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "center",
        });
      } else {
        refs[openedCardState.id].current?.scrollIntoView({
          behavior: "smooth",
        });
        window.scrollBy({ top: -15, behavior: "smooth" });
      }
    }
  }, [openedCardState, refs, isLarge]);

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

  useOnEventOutside(refs[openedCardState?.id], "click", handleCardClose, true);

  return (
    <div className="roadmap__main">
      <StaticImage
        src="../../../assets/images/illus/background_img_roadmap.webp"
        alt="background image"
        className="roadmap__background__image"
      />
      {!isLarge && (
        <h1 className="roadmap__title--mobile">{contentRoadmap.title}</h1>
      )}
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
        {isLarge && <h1 className="roadmap__title">{contentRoadmap.title}</h1>}

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
