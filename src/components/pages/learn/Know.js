import * as React from "react";
import contentKnow from "/content/pages/learn/know.yaml";
import { StaticImage } from "gatsby-plugin-image";
import Parallax from "../../animations/Parallax";
import IconArrowtr from "../../../assets/images/icons/arrow-tr.inline.svg";

const Know = () => (
  <div className="know__main">
    <div className="wrapper">
      <div className="know__intro">
        <div className="know__intro__text">
          <h1 className="know__intro__title">
            {contentKnow.introPart.titlePartOne}
          </h1>
          <h1 className="know__intro__title">
            {contentKnow.introPart.titlePartTwo}
          </h1>

          <p className="know__intro__description">
            {contentKnow.introPart.description}
          </p>
        </div>
        <div className="know__intro__img">
          <div className="know__intro__image__background__halo" />
          <div className="know__intro__img__wrapper">
            <div className="know__intro__image__token__wrapper">
              <StaticImage
                src="../../../../content/images/learn-know-token.webp"
                alt={contentKnow.introPart.alt}
                className="know__intro__image"
              />
            </div>
            <StaticImage
              src="../../../../content/images/learn-know-token.webp"
              alt={contentKnow.introPart.alt}
              className="know__intro__image__shadow"
            />
          </div>
        </div>
      </div>
      <div className="know__middle__wrapper">
        <div className="know__middle__background__halo" />
        <div className="know__middle__about">
          <h2>{contentKnow.aboutPart.title}</h2>
          <p>{contentKnow.aboutPart.description}</p>
          <div className="know__about__whitecards">
            <Parallax
              parallaxStart="100"
              parallaxEnd="-100"
              parallaxMiddle="0.5"
            >
              <div className="whitecard">
                <StaticImage
                  src="../../../../content/images/learn-know-whitecard-bottles.webp"
                  alt={contentKnow.aboutPart.whitecards[0].alt}
                  className="whitecard__image__bottles"
                />
                <p className="whitecard__title">
                  {contentKnow.aboutPart.whitecards[0].title}
                </p>
                <p className="whitecard__text">
                  {contentKnow.aboutPart.whitecards[0].text}
                </p>
              </div>
            </Parallax>
            <Parallax parallaxStart="40" parallaxEnd="-40" parallaxMiddle="0.4">
              <div className="whitecard">
                <StaticImage
                  src="../../../../content/images/learn-know-whitecard-wallet.webp"
                  alt={contentKnow.aboutPart.whitecards[1].alt}
                  className="whitecard__image__wallet"
                />
                <p className="whitecard__title">
                  {contentKnow.aboutPart.whitecards[1].title}
                </p>
                <div
                  className="whitecard__text"
                  dangerouslySetInnerHTML={{
                    __html: contentKnow.aboutPart.whitecards[1].text,
                  }}
                />
              </div>
            </Parallax>
          </div>
        </div>
        <div className="know__middle__background__ellipse" />
        <div className="know__middle__possibilities">
          <h2>{contentKnow.possibilitiesPart.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: contentKnow.possibilitiesPart.description,
            }}
          />
          <StaticImage
            src="../../../../content/images/learn-know-silver-coins.webp"
            alt={contentKnow.possibilitiesPart.alt}
            className="know__possibilities__image"
          />
        </div>
      </div>
      <div className="know__governance">
        <div className="know__governance__text">
          <h2>{contentKnow.governancePart.title}</h2>
          <p>{contentKnow.governancePart.description}</p>
        </div>
        <div className="know__governance__image__wrapper">
          <StaticImage
            src="../../../../content/images/learn-know-governance-mechanism.webp"
            alt={contentKnow.governancePart.alt}
            className="know__governance__image"
          />
          <div className="know__governance__halo" />
        </div>
      </div>
      <div className="know__more">
        <h2>{contentKnow.morePart.title}</h2>
        <p className="know__more__description">
          {contentKnow.morePart.description}
        </p>
        <a
          href={contentKnow.morePart.url}
          className="know__more__button"
          target="_blank"
          rel="noreferrer"
        >
          <span className="know__more__button__text">
            {contentKnow.morePart.button}
            <IconArrowtr />
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default Know;
