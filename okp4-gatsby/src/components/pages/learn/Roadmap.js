import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  createRef,
} from "react";
import { useHorizontalScroll } from "../../../hook/useHorizontalScroll";
import contentRoadmap from "/content/pages/learn/roadmap.yaml";
import * as ResponsiveManager from "../../../utils/ResponsiveManager.js";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import ExpandIcon from "../../../assets/images/icons/expand.inline.svg";
import ExitIcon from "../../../assets/images/icons/exit-icon.inline.svg";

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
  index,
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
            onClick={handleCardOpen(title, index)}
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
  const [openedCard, setOpenedCard] = useState(null);
  const [refs, setRefs] = useState([]);
  const scrollRef = useHorizontalScroll(() => {
    const percent =
      scrollRef.current?.scrollLeft /
      (scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth);
    document.body.style.setProperty("--scroll", percent);
  }, openedCard);

  useEffect(
    () =>
      setRefs(
        Array(contentRoadmap.cards.length)
          .fill()
          .map((_) => createRef())
      ),
    [contentRoadmap.cards.length]
  );

  const handleCardOpen = useCallback(
    (cardTitle, index) => () => {
      setOpenedCard(cardTitle);

      setTimeout(() => {
        ResponsiveManager.isWindowLarger("lg")
          ? refs[index].current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            })
          : refs[index].current?.scrollIntoView({
              behavior: "smooth",
              inline: "start",
            });
      }, 500);
    },
    [setOpenedCard, refs]
  );

  const handleCardClose = useCallback(() => {
    setOpenedCard(null);
  }, [setOpenedCard]);

  return (
    <div className="roadmap__main">
      <Halo />
      <StaticImage
        src="../../../assets/images/illus/background_img_roadmap.png"
        alt="background image"
        className="roadmap__background__image"
      />
      <h1 className="roadmap__title--mobile">{contentRoadmap.title}</h1>
      <div
        ref={scrollRef}
        className={classNames("roadmap__content__wrapper", openedCard, {
          "cards-only": openedCard,
        })}
      >
        <h1 className="roadmap__title">{contentRoadmap.title}</h1>

        <div
          className={classNames("roadmap__cards", {
            "card-opened": openedCard,
          })}
        >
          {contentRoadmap.cards.map(
            ({ title, period, introduction, description, timeline }, index) => (
              <Card
                key={index}
                title={title}
                period={period}
                introduction={introduction}
                description={description}
                handleCardClose={handleCardClose}
                handleCardOpen={handleCardOpen}
                timeline={timeline}
                isOpen={openedCard === title}
                buttonDisabled={!!openedCard}
                index={index}
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
