import React, { useState, useCallback } from "react";
import contentRoadmap from "/content/pages/learn/roadmap.yaml";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import ExpandIcon from "../../../assets/images/icons/expand.inline.svg";
import ExitIcon from "../../../assets/images/icons/exit-icon.inline.svg";

const Roadmap = () => {
  const [openedCard, setOpenedCard] = useState(null);

  const handleCardOpen = useCallback(
    (cardTitle) => () => {
      setOpenedCard(cardTitle);
    },
    [setOpenedCard]
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
      <div
        className={classNames("roadmap__content__wrapper", {
          "cards-only": openedCard,
        })}
      >
        <h1 className="roadmap__title">{contentRoadmap.title}</h1>
        <div className="roadmap__cards">
          {contentRoadmap.cards.map(
            ({ title, period, introduction, description, timeline }) => (
              <div
                className={classNames("roadmap__card", title, {
                  opened: openedCard === title,
                })}
                key={title}
              >
                {openedCard === title ? (
                  <div className="roadmap__card__opened__wrapper">
                    <div className="roadmap__card__opened__content">
                      <div className="roadmap__card__opened__header">
                        <p className="roadmap__card__title">{title}</p>
                        <p className="roadmap__card__period">{period}</p>
                      </div>
                      <p className="roadmap__card__introduction">
                        {introduction}
                      </p>
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
                      className={classNames(
                        "roadmap__card__opened__image__wrapper",
                        title
                      )}
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
                      <div className="roadmap__title__wrapper">
                        <p className="roadmap__card__title">{title}</p>
                      </div>
                      <button
                        className="roadmap__card__button"
                        onClick={handleCardOpen(title)}
                      >
                        Discover
                        <ExpandIcon />
                      </button>
                    </div>
                  </>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
