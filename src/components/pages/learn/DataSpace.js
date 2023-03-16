import React, { useMemo } from "react";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";
import contentDataSpace from "/content/pages/learn/dataSpace.yaml";
import { Link } from "gatsby";

const DataSpace = () => {
  const governanceCards = useMemo(
    () => [
      {
        icon: (
          <StaticImage
            className="dataspace__governance__card__image"
            src="../../../assets/images/illus/new_document.webp"
            alt="card image"
            loading="eager"
          />
        ),
        header: contentDataSpace.governance.cards[0].header,
        description: contentDataSpace.governance.cards[0].description,
      },
      {
        icon: (
          <StaticImage
            className="dataspace__governance__card__image"
            src="../../../assets/images/illus/new_document_setting.webp"
            alt="card image"
            loading="eager"
          />
        ),
        header: contentDataSpace.governance.cards[1].header,
        description: contentDataSpace.governance.cards[1].description,
      },
      {
        icon: null,
        header: contentDataSpace.governance.cards[2].header,
        description: contentDataSpace.governance.cards[2].description,
      },
    ],
    []
  );

  return (
    <div className="dataspace__main">
      <Halo />
      <section className="dataspace__data__spaces">
        <div className="dataspace__data__spaces__wrapper">
          <div className="dataspace__image__wrapper">
            <StaticImage
              className="dataspace__image__data__spaces"
              src="../../../../content/images/index_intro_card_1.webp"
              alt="build data spaces"
              loading="eager"
            />
            <div className="dataspace__background__halo" />
          </div>
          <div className="dataspace__description build">
            <h1>{contentDataSpace.dataSpaces.build.header}</h1>
            <p>{contentDataSpace.dataSpaces.build.description}</p>
          </div>
        </div>
        <div className="dataspace__data__spaces__wrapper invert-order">
          <div className="dataspace__description purposes">
            <h2>{contentDataSpace.dataSpaces.purposes.header}</h2>
            {contentDataSpace.dataSpaces.purposes.descriptions.map(
              (description, index) => (
                <p key={index}>{description}</p>
              )
            )}
          </div>
          <div className="dataspace__image__wrapper purposes">
            <StaticImage
              className="dataspace__image__data__spaces"
              src="../../../../content/images/index_intro_card_2.webp"
              alt="build data spaces"
              loading="eager"
            />
            <div className="dataspace__background__halo" />
            <StaticImage
              className="dataspace__background__image"
              src="../../../assets/images/illus/background_img_northern_light.webp"
              alt="build data spaces"
              loading="eager"
            />
          </div>
        </div>
        <div className="dataspace__description share">
          <h2>{contentDataSpace.dataSpaces.share.header}</h2>
          <p>{contentDataSpace.dataSpaces.share.description}</p>
        </div>
      </section>
      <section className="dataspace__governance">
        <div className="dataspace__background__halo" />
        <div className="dataspace__governance__content">
          <h2>{contentDataSpace.governance.header}</h2>
          {governanceCards.map(({ icon, header, description }, index) => (
            <div className="dataspace__governance__card" key={index}>
              {icon}
              <p>{header}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="dataspace__background__halo" />
      </section>
      <section className="dataspace__decentralized">
        <div className="dataspace__description">
          <h2>{contentDataSpace.decentralizedProtocol.header}</h2>
          {contentDataSpace.decentralizedProtocol.descriptions.map(
            (description, index) => (
              <p key={index}>{description}</p>
            )
          )}
          <Link
            className="dataspace__decentralized__button"
            to={contentDataSpace.decentralizedProtocol.button.link}
          >
            {contentDataSpace.decentralizedProtocol.button.description}
          </Link>
        </div>
        <div className="dataspace__image__wrapper">
          <StaticImage
            className="dataspace__image__landing"
            src="../../../assets/images/illus/index_landing.webp"
            alt="OKP4 hero image"
            loading="eager"
          />
          <div className="dataspace__background__halo" />
        </div>
      </section>
    </div>
  );
};

export default DataSpace;
