import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import content from "/content/pages/learn/okp4.yaml";
import { Link } from "gatsby";

const Okp4 = ({ files }) => (
  <div className="learn-okp4">
    <div className="wrapper">
      <section className="okp4__presentation">
        <div className="okp4__presentation_image--container">
          <GatsbyImage
            className="okp4__presentation_image"
            image={MediaManager.GetImage(content.presentationPart.image, files)}
            alt={content.presentationPart.title}
          />
        </div>
        <div className="content__wrapper">
          <h1 className="okp4__title">{content.presentationPart.title}</h1>
        </div>
        <div className="okp4__presentation__text">
          <p
            className="okp4__text__primary okp4__presentation__introduction"
            dangerouslySetInnerHTML={{
              __html: content.presentationPart.introduction,
            }}
          ></p>
          <p
            className="okp4__text__secondary"
            dangerouslySetInnerHTML={{
              __html: content.presentationPart.description,
            }}
          ></p>
        </div>
      </section>

      <div className="okp4__section">
        <div className="okp4__section__content">
          <div className="okp4__data-sharing">
            <div className="okp4__section__image">
              <GatsbyImage
                className="imgWrapper"
                image={MediaManager.GetImage(
                  content.dataSharingPart.image,
                  files
                )}
                alt={content.dataSharingPart.alt}
              />
            </div>
            <div className="okp4__section__description">
              <h2 className="okp4__title">{content.dataSharingPart.title}</h2>

              <div className="okp4__text__secondary okp4__text-part">
                <p>{content.dataSharingPart.text[0]}</p>
                <br />
                <p>
                  <span>{content.dataSharingPart.text[1]}</span>{" "}
                  <span className="okp4__link-to-button">
                    {content.dataSharingPart.text[2]}
                    <Link
                      className="okp4__button-overlay"
                      to="/learn/dataspace/"
                    >
                      {content.discoverDataSpace}
                    </Link>
                  </span>{" "}
                  <span>{content.dataSharingPart.text[3]}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="okp4__know">
        <h2 className="okp4__know__title">{content.knowPart.title}</h2>
        <div className="okp4__know__content content__wrapper">
          <div
            className=" okp4__text__primary okp4__know__introduction"
            dangerouslySetInnerHTML={{
              __html: content.knowPart.introduction,
            }}
          ></div>
          <div
            className="okp4__text__secondary okp4__know__description"
            dangerouslySetInnerHTML={{
              __html: content.knowPart.ecosystemDescription,
            }}
          ></div>
          <div
            className="okp4__know__know okp4__text__emphase"
            dangerouslySetInnerHTML={{
              __html: content.knowPart.knowDescription,
            }}
          ></div>
          <div className="okp4__know__image okp4__image">
            <GatsbyImage
              image={MediaManager.GetImage(content.knowPart.image, files)}
              alt={content.knowPart.alt}
            />
          </div>
        </div>
      </div>

      <div className="okp4__section okp4__section--cosmos">
        <div className="okp4__section__content okp4__cosmos">
          <h2 className="okp4__cosmos__title">{content.cosmosPart.title}</h2>
          <div className="okp4__cosmos__content content__wrapper">
            <div
              className="okp4__text__primary okp4__cosmos__introduction"
              dangerouslySetInnerHTML={{
                __html: content.cosmosPart.introduction,
              }}
            ></div>
            <div>
              <div
                className="okp4__cosmos__link okp4__text__emphase"
                dangerouslySetInnerHTML={{
                  __html: content.cosmosPart.cosmosLink,
                }}
              ></div>
            </div>
            <div className="okp4__cosmos__description okp4__text__secondary">
              <p>
                <span>{content.cosmosPart.description[0]}</span>
                <span className="okp4__bold">
                  {content.cosmosPart.description[1]}
                </span>
                <span>{content.cosmosPart.description[2]}</span>
              </p>
              <p className="okp4__cosmos__description--second-paragraph">
                <span>{content.cosmosPart.description[3]}</span>{" "}
                <span className="okp4__link-to-button">
                  {content.cosmosPart.description[4]}
                  <Link className="okp4__button-overlay" to="/learn/dataspace/">
                    {content.discoverDataSpace}
                  </Link>
                </span>{" "}
                <span>{content.cosmosPart.description[5]}</span>
                <span className="okp4__bold">
                  {content.cosmosPart.description[6]}
                </span>
                <span>{content.cosmosPart.description[7]}</span>
              </p>
            </div>

            <div className="okp4__cosmos__image okp4__image">
              <GatsbyImage
                image={MediaManager.GetImage(content.cosmosPart.image, files)}
                alt={content.cosmosPart.alt}
              />
            </div>
          </div>
          <Link className="okp4__button" to="/learn/dataspace/">
            <span
              dangerouslySetInnerHTML={{
                __html: content.discoverDataSpace,
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Okp4;
