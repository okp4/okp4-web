import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import Halo from "../../animations/Halo.js";
import content from "/content/pages/learn/okp4.yaml";

const Okp4 = ({ files }) => (
  <div className="learn-okp4">
    <Halo classContainer={"halo--big"}></Halo>
    <GatsbyImage
      className="okp4__presentation_image"
      image={MediaManager.GetImage(content.presentation.image, files)}
      alt={content.presentation.title}
    />
    <div className="wrapper">
      <section className="okp4__presentation">
        <div>
          <h2 className="okp4__title">{content.presentation.title}</h2>
          <div className="okp4__presentation__text">
            <p
              className="okp4__text__primary okp4__presentation__introduction"
              dangerouslySetInnerHTML={{
                __html: content.presentation.introduction,
              }}
            ></p>
            <p
              className="okp4__text__secondary"
              dangerouslySetInnerHTML={{
                __html: content.presentation.description,
              }}
            ></p>
          </div>
        </div>
      </section>
      <div className="okp4__section">
        <div className="okp4__section__content">
          <div className="okp4__data-sharing">
            <div className="okp4__section__image">
              <GatsbyImage
                className="imgWrapper"
                image={MediaManager.GetImage(content.dataSharing.image, files)}
                alt={content.dataSharing.title}
              />
            </div>
            <div className=" okp4__section__description">
              <h3 className="okp4__title">{content.dataSharing.title}</h3>
              <div
                className="okp4__text__secondary okp4__text-part"
                dangerouslySetInnerHTML={{
                  __html: content.dataSharing.text,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="okp4__know">
        <h3 className="okp4__know__title">{content.know.title}</h3>
        <div className="okp4__know__content">
          <div
            className=" okp4__text__primary okp4__know__introduction"
            dangerouslySetInnerHTML={{
              __html: content.know.introduction,
            }}
          ></div>
          <div
            className="okp4__text__secondary okp4__know__description"
            dangerouslySetInnerHTML={{
              __html: content.know.description,
            }}
          ></div>
          <div
            className="okp4__know__know okp4__text__emphase"
            dangerouslySetInnerHTML={{
              __html: content.know.know,
            }}
          ></div>
          <div className="okp4__know__image okp4__image">
            <GatsbyImage
              image={MediaManager.GetImage(content.know.image, files)}
              alt={content.know.title}
            />
          </div>
        </div>
      </div>

      <div className="okp4__section">
        <div className="okp4__section__content okp4__cosmos">
          <h3 className="okp4__cosmos__title">{content.cosmos.title}</h3>
          <div className="okp4__cosmos__content">
            <div
              className="okp4__text__primary okp4__cosmos__introduction"
              dangerouslySetInnerHTML={{
                __html: content.cosmos.introduction,
              }}
            ></div>
            <div>
              <div
                className="okp4__cosmos__link okp4__text__emphase"
                dangerouslySetInnerHTML={{
                  __html: content.cosmos.cosmos,
                }}
              ></div>
            </div>
            <div
              className="okp4__cosmos__description okp4__text__secondary"
              dangerouslySetInnerHTML={{
                __html: content.cosmos.description,
              }}
            ></div>

            <div className="okp4__cosmos__image okp4__image">
              <GatsbyImage
                image={MediaManager.GetImage(content.cosmos.image, files)}
                alt={content.cosmos.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Okp4;
