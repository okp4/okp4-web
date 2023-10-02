import React, { useMemo } from "react";
import { StaticImage } from "gatsby-plugin-image";
import contentZone from "/content/pages/learn/zone.yaml";
import { Link } from "gatsby";

const Zone = () => {
  const managementCards = useMemo(
    () => [
      {
        icon: (
          <StaticImage
            className="zone__management__card__image"
            src="../../../assets/images/illus/new_document.webp"
            alt={contentZone.management.cards[0].alt}
          />
        ),
        header: contentZone.management.cards[0].header,
        description: contentZone.management.cards[0].description,
      },
      {
        icon: (
          <StaticImage
            className="zone__management__card__image"
            src="../../../assets/images/illus/new_document_setting.webp"
            alt={contentZone.management.cards[1].alt}
          />
        ),
        header: contentZone.management.cards[1].header,
        description: contentZone.management.cards[1].description,
      },
      {
        icon: null,
        header: contentZone.management.cards[2].header,
        description: contentZone.management.cards[2].description,
      },
    ],
    []
  );

  return (
    <div className="zone__main">
      <section className="zone__section">
        <div className="zone__wrapper">
          <div className="zone__image__wrapper">
            <StaticImage
              className="zone__image"
              src="../../../../content/images/index_intro_card_1.webp"
              alt={contentZone.zones.main.alt}
              loading="eager"
            />
            <div className="zone__background__halo" />
          </div>
          <div className="zone__description main">
            <h1 className="header">{contentZone.zones.main.header}</h1>
            <p>{contentZone.zones.main.description}</p>
          </div>
        </div>
        <div className="zone__wrapper invert-order">
          <div className="zone__description conditions">
            <h2>{contentZone.zones.conditions.header}</h2>
            {contentZone.zones.conditions.descriptions.map(
              (description, index) => (
                <p key={index}>{description}</p>
              )
            )}
          </div>
          <div className="zone__image__wrapper conditions">
            <StaticImage
              className="zone__image"
              src="../../../../content/images/index_intro_card_2.webp"
              alt={contentZone.zones.conditions.alt}
            />
            <div className="zone__background__halo" />
            <StaticImage
              className="zone__background__image"
              src="../../../assets/images/illus/background_img_northern_light.webp"
              alt=""
            />
          </div>
        </div>
        <div className="zone__description resources">
          <h2>{contentZone.zones.resources.header}</h2>
          {contentZone.zones.resources.descriptions.map(
            (description, index) => (
              <p key={index}>{description}</p>
            )
          )}
          <div className="zone__image__wrapper">
            <StaticImage
              className="zone__image__resources"
              src="../../../assets/images/illus/zone-compatible-resources.webp"
              alt={contentZone.zones.resources.alt}
            />
            <div className="zone__background__halo" />
          </div>
        </div>
        <div className="zone__description flexibility">
          <h2>{contentZone.zones.flexibility.header}</h2>
          {contentZone.zones.flexibility.descriptions.map(
            (description, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            )
          )}
        </div>
      </section>
      <section className="zone__management">
        <div className="zone__background__halo" />
        <div className="zone__management__content">
          <h2>{contentZone.management.header}</h2>
          {managementCards.map(({ icon, header, description }, index) => (
            <div className="zone__management__card" key={index}>
              {icon}
              <p>{header}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="zone__background__halo" />
      </section>
      <section className="zone__decentralized">
        <div className="zone__description">
          <h2>{contentZone.decentralizedProtocol.header}</h2>
          {contentZone.decentralizedProtocol.descriptions.map(
            (description, index) => (
              <p key={index}>{description}</p>
            )
          )}
          <Link
            className="zone__decentralized__button"
            to={contentZone.decentralizedProtocol.button.link}
          >
            {contentZone.decentralizedProtocol.button.description}
          </Link>
        </div>
        <div className="zone__image__wrapper">
          <StaticImage
            className="zone__image__landing"
            src="../../../assets/images/illus/index_landing.webp"
            alt={contentZone.decentralizedProtocol.alt}
          />
          <div className="zone__background__halo" />
        </div>
      </section>
    </div>
  );
};

export default Zone;
