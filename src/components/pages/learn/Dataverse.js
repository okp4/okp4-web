import * as React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import content from "/content/pages/learn/dataverse.yaml";
import { Link } from "gatsby";
import Parallax from "../../animations/Parallax.js";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import { useBreakpoint } from "../../../hook/useBreakpoint";

const Dataverse = ({ files }) => {
  const { isLarge } = useBreakpoint();
  const parallax = React.useMemo(() => [100, 50, 150], []);

  return (
    <div>
      <div className="wrapper">
        <div className="okp4_universe">
          <h1 className="okp4_universe__title">{content.okp4Universe.title}</h1>
          <p className="okp4_universe__description">
            {content.okp4Universe.description}
          </p>
          <div className="okp4_universe__image_wrapper">
            <div className="background_halo" />
            <GatsbyImage
              className="dataverse_image"
              image={MediaManager.GetImage(content.okp4Universe.image, files)}
              alt={content.okp4Universe.alt}
            />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <StaticImage
          className="background_light background_light__build_dataverse"
          src="../../../assets/images/illus/background_img_northern_light.webp"
          alt="build dataverse"
          loading="eager"
        />
        <div className="build_dataverse">
          <h2>{content.buildDataverse.title}</h2>
          <p
            className="build_dataverse__description"
            dangerouslySetInnerHTML={{
              __html: content.buildDataverse.description,
            }}
          ></p>
        </div>
      </div>

      <div className="web2_okp4_wrapper">
        <div className="web2_okp4">
          <div className="web2_okp4__container">
            <div className="background_small_ellipse_halo" />
            <div className="background_large_ellipse_halo" />
            <div className="web2_okp4__image">
              <GatsbyImage
                className="imgWrapper"
                image={MediaManager.GetImage(content.web2Okp4.image, files)}
                alt={content.web2Okp4.alt}
              />
            </div>
            <div className="web2_okp4__content_wrapper">
              <h2>{content.web2Okp4.title}</h2>
              <p
                className="web2_okp4__description"
                dangerouslySetInnerHTML={{
                  __html: content.web2Okp4.description,
                }}
              ></p>
              <div className="web2_okp4__services">
                {content.web2Okp4.services.map((service, index) => (
                  <div key={index} className="web2_okp4__service">
                    <h4 className="web2_okp4__subtitle">{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
              <div className="web2_okp4__discover_button">
                <Link
                  to={content.web2Okp4.button.link}
                  className="dataverse_button"
                >
                  <span>{content.web2Okp4.button.name}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ibc">
        <div className="ibc__image">
          {isLarge ? (
            <StaticImage
              className="background_light background_light__ibc"
              src="../../../assets/images/illus/background_img_northern_light.webp"
              alt="build dataverse"
              loading="eager"
            />
          ) : (
            <div className="background_halo" />
          )}

          <GatsbyImage
            image={MediaManager.GetImage(content.ibc.image, files)}
            alt={content.ibc.alt}
          />
        </div>
        <div className="ibc__content">
          <h2 className="ibc__content__title">{content.ibc.title}</h2>
          <p
            className="ibc__content__description"
            dangerouslySetInnerHTML={{
              __html: content.ibc.description,
            }}
          />
          <div className="ibc__content__synergies">
            {content.ibc.synergies.map((synergy) => (
              <div key={synergy.title}>
                <h4 className="ibc__content__synergy_title">{synergy.title}</h4>
                <div className="ibc__content__synergy_links">
                  {synergy.links?.map((link) => (
                    <a
                      key={link.name}
                      className="ibc__content__synergy_link"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{link.name}</p>
                      <IconArrowtr className="arrow" />
                    </a>
                  ))}
                  {synergy.internalLink && (
                    <Link
                      to={synergy.internalLink.link}
                      className="dataverse_button ibc__content__synergy_internal_link"
                    >
                      <span>{synergy.internalLink.name}</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="architecture">
          <h2 className="architecture__title">{content.architecture.title}</h2>
          <p
            className="architecture__description"
            dangerouslySetInnerHTML={{
              __html: content.architecture.description,
            }}
          ></p>

          <div className="architecture__cards">
            {content.architecture.cards.map((card, index) => (
              <Parallax
                key={index}
                classContainer="architecture__card"
                parallaxStart={parallax[index]}
                parallaxEnd={-parallax[index]}
                parallaxMiddle="0.5"
              >
                <div className="architecture__card__image" data-infinite="1">
                  <GatsbyImage
                    image={MediaManager.GetImage(card.image, files)}
                    alt={card.alt}
                  />
                </div>
                <p className="architecture__card__title">{card.title}</p>
                <p className="architecture__card__description">
                  {card.description}
                </p>
              </Parallax>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dataverse;
