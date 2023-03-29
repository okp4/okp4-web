import * as React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import content from "/content/pages/develop/validator.yaml";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import NemetonGif from "/src/assets/images/gif/nemeton-program.gif";
import { useBreakpoint } from "../../../hook/useBreakpoint";

const Validator = ({ files }) => {
  const { isLarge } = useBreakpoint();

  return (
    <div>
      <div className="introduction wrapper">
        <div className="introduction__text">
          <h1>{content.introduction.title}</h1>
          <p
            className="introduction__description"
            dangerouslySetInnerHTML={{
              __html: content.introduction.description,
            }}
          />
        </div>
        <div className="introduction__image-wrapper">
          <GatsbyImage
            className="introduction__image"
            image={MediaManager.GetImage(content.introduction.image, files)}
            alt={content.introduction.alt}
            loading="eager"
          />
        </div>
      </div>

      <div className="join wrapper">
        <h2>{content.join.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: content.join.description,
          }}
        />
        <a
          className="validator__button"
          href={content.join.button.url}
          target="_blank"
          rel="noreferrer"
        >
          <span>{content.join.button.label}</span>
          <IconArrowtr className="arrow" />
        </a>
      </div>

      <div className="what-is wrapper">
        <div className="what-is__image-wrapper">
          <GatsbyImage
            image={MediaManager.GetImage(content.whatIs.image, files)}
            alt={content.whatIs.alt}
          />
        </div>
        <div className="what-is__text">
          <h2>{content.whatIs.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: content.whatIs.description,
            }}
          />
          {isLarge && (
            <StaticImage
              className="background_light"
              src="../../../assets/images/illus/background_img_northern_light.webp"
              alt=""
            />
          )}
        </div>
      </div>

      <div className="nemeton_wrapper">
        <div className="nemeton">
          {isLarge && <div className="background_large_ellipse_halo" />}
          <div className="nemeton__content">
            <h2>{content.nemeton.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: content.nemeton.description,
              }}
            />
            <a
              className="validator__button"
              href={content.nemeton.button.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>{content.nemeton.button.label}</span>
              <IconArrowtr className="arrow" />
            </a>
          </div>
          <div className="nemeton__image">
            <img src={NemetonGif} alt={content.nemeton.alt} loading="eager" />
          </div>
        </div>
      </div>

      <div className="staking wrapper">
        <div className="introduction__image-wrapper">
          <StaticImage
            className="staking__image"
            src="../../../assets/images/illus/druid_magic.webp"
            alt={content.staking.alt}
          />
        </div>
        <div className="staking__text">
          <h2>{content.staking.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: content.staking.description.paragraph1,
            }}
          />
          <p
            className="staking__text__paragraph2"
            dangerouslySetInnerHTML={{
              __html: content.staking.description.paragraph2,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Validator;
