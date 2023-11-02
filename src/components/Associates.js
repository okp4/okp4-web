import React, { useMemo } from "react";
import contentFooter from "/content/transversals/footer.yaml";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";

const Associates = () => {
  const logos = useMemo(
    () => [
      {
        label: contentFooter.associates.companies.logos[0].label,
        url: contentFooter.associates.companies.logos[0].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[0].label
            )}
            src="../../content/images/companies/logo-chainlayer.webp"
            alt={contentFooter.associates.companies.logos[0].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[1].label,
        url: contentFooter.associates.companies.logos[1].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[1].label
            )}
            src="../../content/images/companies/logo-interchain.webp"
            alt={contentFooter.associates.companies.logos[1].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[2].label,
        url: contentFooter.associates.companies.logos[2].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[2].label
            )}
            src="../../content/images/companies/logo-cc-validators.webp"
            alt={contentFooter.associates.companies.logos[2].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[3].label,
        url: contentFooter.associates.companies.logos[3].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[3].label
            )}
            src="../../content/images/companies/logo-b-harvest.webp"
            alt={contentFooter.associates.companies.logos[3].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[4].label,
        url: contentFooter.associates.companies.logos[4].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[4].label
            )}
            src="../../content/images/companies/logo-stakelab.webp"
            alt={contentFooter.associates.companies.logos[4].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[5].label,
        url: contentFooter.associates.companies.logos[5].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[5].label
            )}
            src="../../content/images/companies/logo-p2p.webp"
            alt={contentFooter.associates.companies.logos[5].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[6].label,
        url: contentFooter.associates.companies.logos[6].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[6].label
            )}
            src="../../content/images/companies/logo-polkachu.webp"
            alt={contentFooter.associates.companies.logos[6].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[7].label,
        url: contentFooter.associates.companies.logos[7].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[7].label
            )}
            src="../../content/images/companies/logo-notional.webp"
            alt={contentFooter.associates.companies.logos[7].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[8].label,
        url: contentFooter.associates.companies.logos[8].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[8].label
            )}
            src="../../content/images/companies/logo-imperator.webp"
            alt={contentFooter.associates.companies.logos[8].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[9].label,
        url: contentFooter.associates.companies.logos[9].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[9].label
            )}
            src="../../content/images/companies/logo-citadelone.webp"
            alt={contentFooter.associates.companies.logos[9].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[10].label,
        url: contentFooter.associates.companies.logos[10].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[10].label
            )}
            src="../../content/images/companies/logo-nodestake.webp"
            alt={contentFooter.associates.companies.logos[10].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[11].label,
        url: contentFooter.associates.companies.logos[11].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[11].label
            )}
            src="../../content/images/companies/logo-informal.webp"
            alt={contentFooter.associates.companies.logos[11].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[12].label,
        url: contentFooter.associates.companies.logos[12].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[12].label
            )}
            src="../../content/images/companies/logo-nest.webp"
            alt={contentFooter.associates.companies.logos[12].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[13].label,
        url: contentFooter.associates.companies.logos[13].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[13].label
            )}
            src="../../content/images/companies/logo-easytostake.webp"
            alt={contentFooter.associates.companies.logos[13].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[14].label,
        url: contentFooter.associates.companies.logos[14].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[14].label
            )}
            src="../../content/images/companies/logo-dorahacks.webp"
            alt={contentFooter.associates.companies.logos[14].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[15].label,
        url: contentFooter.associates.companies.logos[15].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[15].label
            )}
            src="../../content/images/companies/logo-lavenderfive.webp"
            alt={contentFooter.associates.companies.logos[15].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[16].label,
        url: contentFooter.associates.companies.logos[16].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[16].label
            )}
            src="../../content/images/companies/logo-meria.webp"
            alt={contentFooter.associates.companies.logos[16].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[17].label,
        url: contentFooter.associates.companies.logos[17].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[17].label
            )}
            src="../../content/images/companies/logo-posthuman.webp"
            alt={contentFooter.associates.companies.logos[17].alt}
          />
        ),
      },

      {
        label: contentFooter.associates.companies.logos[18].label,
        url: contentFooter.associates.companies.logos[18].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[18].label
            )}
            src="../../content/images/companies/logo-stakecito.webp"
            alt={contentFooter.associates.companies.logos[18].alt}
          />
        ),
      },
      {
        label: contentFooter.associates.companies.logos[19].label,
        url: contentFooter.associates.companies.logos[19].url,
        logo: (
          <StaticImage
            className={classNames(
              "associates__logos__image",
              contentFooter.associates.companies.logos[19].label
            )}
            src="../../content/images/companies/logo-saxon.webp"
            alt={contentFooter.associates.companies.logos[19].alt}
          />
        ),
      },
    ],
    []
  );

  return (
    <section className="people">
      <div className="people__wrapper">
        <h3 className="people__title">
          {contentFooter.associates.companies.title}
        </h3>
        <div className="logos__wrapper">
          {logos.map(({ label, url, logo }) => (
            <a href={url} key={label} target="_blank" rel="noreferrer">
              <span>{logo}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associates;
