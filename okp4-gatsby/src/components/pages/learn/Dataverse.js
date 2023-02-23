import * as React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Halo from "../../animations/Halo.js";
import content from "/content/pages/learn/dataverse.yaml";
import { Link } from "gatsby";
import Parallax from "../../animations/Parallax.js";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import { useBreakpoint } from "../../../hook/useBreakpoint";

const parallax = [100, 50, 150];

const Dataverse = ({ files }) => {
  const { isLarge } = useBreakpoint();
  return (
    <div>
      <Halo />

      <div className="wrapper">
        <div className="okp4_universe">
          <h1 className="okp4_universe--title">{content.okp4Universe.title}</h1>
          <p className="okp4_universe--description">
            {content.okp4Universe.description}
          </p>
          <div className="okp4_universe--image_wrapper">
            <div className="background_halo" />
            <GatsbyImage
              className="dataverse_image"
              image={MediaManager.GetImage(content.okp4Universe.image, files)}
              alt={content.okp4Universe.title}
            />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <StaticImage
          className="background_light background_light--build_dataverse"
          src="../../../assets/images/illus/background_img_northern_light.png"
          alt="build dataverse"
          loading="eager"
        />
        <div className="build_dataverse">
          <h2>{content.buildDataverse.title}</h2>
          <p
            className="build_dataverse--description"
            dangerouslySetInnerHTML={{
              __html: content.buildDataverse.description,
            }}
          ></p>
        </div>
      </div>

      <div className="web2_okp4_wrapper">
        <div className="web2_okp4">
          <div className="web2_okp4--container">
            <div className="background_small_ellipse_halo" />
            <div className="background_large_ellipse_halo" />
            <div className="web2_okp4--image">
              <GatsbyImage
                className="imgWrapper"
                image={MediaManager.GetImage(content.web2Okp4.image, files)}
                alt={content.web2Okp4.title}
              />
            </div>
            <div className="web2_okp4--content_wrapper">
              <h2>{content.web2Okp4.title}</h2>
              <p
                className="web2_okp4--description"
                dangerouslySetInnerHTML={{
                  __html: content.web2Okp4.description,
                }}
              ></p>
              <div className="web2_okp4--services">
                {content.web2Okp4.services.map((service) => (
                  <div className="web2_okp4--service">
                    <h4 className="web2_okp4--subtitle">{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
              <div className="web2_okp4--discover_button">
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
        <div className="ibc--image">
          {isLarge ? (
            <StaticImage
              className="background_light background_light--ibc"
              src="../../../assets/images/illus/background_img_northern_light.png"
              alt="build dataverse"
              loading="eager"
            />
          ) : (
            <div className="background_halo" />
          )}

          <GatsbyImage
            image={MediaManager.GetImage(content.ibc.image, files)}
            alt={content.ibc.title}
          />
        </div>
        <div className="ibc--content">
          <h2 className="ibc--content--title">{content.ibc.title}</h2>
          <p
            className="ibc--content--description"
            dangerouslySetInnerHTML={{
              __html: content.ibc.description,
            }}
          />
          <div className="ibc--content--synergies">
            {content.ibc.synergies.map((synergy) => (
              <div>
                <h4 className="ibc--content--synergy_title">{synergy.title}</h4>
                <div className="ibc--content--synergy_links">
                  {synergy.links?.map((link) => (
                    <a
                      className="ibc--content--synergy_link"
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
                      className="dataverse_button ibc--content--synergy_internal_link"
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
          <h2 className="architecture--title">{content.architecture.title}</h2>
          <p
            className="architecture--description"
            dangerouslySetInnerHTML={{
              __html: content.architecture.description,
            }}
          ></p>

          <div className="architecture--cards">
            {content.architecture.cards.map((card, index) => (
              <Parallax
                classContainer="architecture--card"
                parallaxStart={parallax[index]}
                parallaxEnd={-parallax[index]}
                parallaxMiddle="0.5"
              >
                <div className="architecture--card--image" data-infinite="1">
                  <GatsbyImage
                    image={MediaManager.GetImage(card.image, files)}
                    alt={card.name}
                  />
                </div>
                <p className="architecture--card--title">{card.title}</p>
                <p className="architecture--card--description">
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
