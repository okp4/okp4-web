import React from "react";
import contentRoadmap from "/content/pages/learn/roadmap.yaml";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import ExpandIcon from "../../../assets/images/icons/expand.inline.svg";

const Roadmap = () => {
  return (
    <div className="roadmap__main">
      <Halo />
      <StaticImage
        src="../../../assets/images/illus/background_img_roadmap.png"
        alt="background image"
        className="roadmap__background__image"
      />
      <div className="roadmap__content__wrapper">
        <h1 className="roadmap__title">{contentRoadmap.title}</h1>
        <div className="roadmap__cards">
          {cards.map(({ title, period }) => (
            <div className={classNames("roadmap__card", title)} key={title}>
              <p className="roadmap__card__period">{period}</p>
              <div className="roadmap__card__content__wrapper">
                <p className="roadmap__card__title">{`- ${title}`}</p>
                <button className="roadmap__card__button">
                  Discover
                  <ExpandIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
