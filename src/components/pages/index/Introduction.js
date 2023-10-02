import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Strate from "../../animations/Strate.js";
import Parallax from "../../animations/Parallax.js";
import content from "/content/pages/index/introduction.yaml";
import { Link } from "gatsby";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";

const Introduction = ({ files }) => {
  return (
    <Strate classContainer={"introduction"}>
      <div className="gradient">
        <div className="gradient__layer"></div>
      </div>
      <div className="wrapper">
        <h2 className="introduction__title">{content.title}</h2>
        <p className="introduction__text">
          <span
            dangerouslySetInnerHTML={{
              __html: content.description[0],
            }}
          />
          <Link to="/learn/zone/">
            <span
              dangerouslySetInnerHTML={{
                __html: content.description[1],
              }}
            />
            <IconArrowtr />
          </Link>
          <span
            dangerouslySetInnerHTML={{
              __html: content.description[2],
            }}
          />
        </p>
        <p className="introduction__catch">{content.featuredText}</p>
        <div className="grid introduction__cards">
          <Parallax
            classContainer="introduction__cards__item"
            parallaxStart="100"
            parallaxEnd="-100"
            parallaxMiddle="0.5"
          >
            <div className="introduction__cards__item__illus" data-infinite="1">
              <GatsbyImage
                className="imgWrapper"
                image={MediaManager.GetImage(content.whitecard1.image, files)}
                alt={content.whitecard1.alt}
              />
            </div>
            <p className="title">{content.whitecard1.title}</p>
            <p className="text">{content.whitecard1.description}</p>
          </Parallax>
          <Parallax
            classContainer="introduction__cards__item"
            parallaxStart="50"
            parallaxEnd="-50"
            parallaxMiddle="0.5"
          >
            <div className="introduction__cards__item__illus" data-infinite="1">
              <GatsbyImage
                className="imgWrapper"
                image={MediaManager.GetImage(content.whitecard2.image, files)}
                alt={content.whitecard2.alt}
              />
            </div>
            <p className="title">{content.whitecard2.title}</p>
            <p className="text">{content.whitecard2.description}</p>
          </Parallax>
          <Parallax
            classContainer="introduction__cards__item"
            parallaxStart="150"
            parallaxEnd="-150"
            parallaxMiddle="0.5"
          >
            <div className="introduction__cards__item__illus" data-infinite="1">
              <GatsbyImage
                className="imgWrapper"
                image={MediaManager.GetImage(content.whitecard3.image, files)}
                alt={content.whitecard3.alt}
              />
            </div>
            <p className="title">{content.whitecard3.title}</p>
            <p className="text">{content.whitecard3.description}</p>
          </Parallax>
        </div>
        <div className="grid introduction__pushs">
          <div className="introduction__pushs__item introduction__pushs__item--left">
            <div className="introduction__pushs__item__illus" data-infinite="1">
              <GatsbyImage
                className="imgWrapper"
                image={MediaManager.GetImage(content.bluecard1.image, files)}
                alt={content.bluecard1.alt}
              />
            </div>
            <div className="introduction__pushs__item__texts">
              <p className="title">{content.bluecard1.title}</p>
              <p className="text">{content.bluecard1.description}</p>
            </div>
            <Link to={content.bluecard1.url} className="cta__button">
              <span className="cta__button__text">
                {content.bluecard1.button}
              </span>
            </Link>
          </div>
          <div className="introduction__pushs__item introduction__pushs__item--right">
            <div className="introduction__pushs__item__illus" data-infinite="1">
              <GatsbyImage
                className="imgWrapper"
                image={MediaManager.GetImage(content.bluecard2.image, files)}
                alt={content.bluecard2.alt}
              />
            </div>
            <div className="introduction__pushs__item__texts">
              <p className="title">{content.bluecard2.title}</p>
              <p className="text">{content.bluecard2.description}</p>
            </div>
          </div>
          <div className="introduction__pushs__item introduction__pushs__item--right">
            <div className="introduction__pushs__item__texts">
              <p className="title">{content.bluecard3.title}</p>
              <p className="text">{content.bluecard3.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Strate>
  );
};

export default Introduction;
