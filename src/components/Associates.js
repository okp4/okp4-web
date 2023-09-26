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

  const advisors = useMemo(
    () => [
      {
        name: contentFooter.associates.advisors.people[0].name,
        lastname: contentFooter.associates.advisors.people[0].lastname,
        job: contentFooter.associates.advisors.people[0].job,
        image: (
          <StaticImage
            className="associates__advisors__image"
            src="../../content/images/advisors/advisor-peter-van-mourik.webp"
            alt={contentFooter.associates.advisors.people[0].alt}
          />
        ),
      },
      {
        name: contentFooter.associates.advisors.people[1].name,
        lastname: contentFooter.associates.advisors.people[1].lastname,
        job: contentFooter.associates.advisors.people[1].job,
        image: (
          <StaticImage
            className="associates__advisors__image"
            src="../../content/images/advisors/advisor-benjamin-santi.webp"
            alt={contentFooter.associates.advisors.people[1].alt}
          />
        ),
      },

      {
        name: contentFooter.associates.advisors.people[2].name,
        lastname: contentFooter.associates.advisors.people[2].lastname,
        job: contentFooter.associates.advisors.people[2].job,
        image: (
          <StaticImage
            className="associates__advisors__image"
            src="../../content/images/advisors/advisor-jasvin-bhasin.webp"
            alt={contentFooter.associates.advisors.people[2].alt}
          />
        ),
      },
      {
        name: contentFooter.associates.advisors.people[3].name,
        lastname: contentFooter.associates.advisors.people[3].lastname,
        job: contentFooter.associates.advisors.people[3].job,
        image: (
          <StaticImage
            className="associates__advisors__image"
            src="../../content/images/advisors/advisor-sebastien-couture.webp"
            alt={contentFooter.associates.advisors.people[3].alt}
          />
        ),
      },
    ],
    []
  );

  return (
    <section className="associates">
      <div className="associates__wrapper">
        <p className="associates__title">
          {contentFooter.associates.companies.title}
        </p>
        <div className="associates__logos__wrapper">
          {logos.map(({ label, url, logo }) => (
            <a href={url} key={label} target="_blank" rel="noreferrer">
              <span>{logo}</span>
            </a>
          ))}
        </div>

        <p className="associates__title">
          {contentFooter.associates.advisors.title}
        </p>
        <div className="associates__advisors__wrapper">
          {advisors.map(({ name, lastname, job, image }) => (
            <div
              className="associates__advisor__container"
              key={name + lastname}
            >
              <div className="associates__advisor__card" key={name + lastname}>
                <StaticImage
                  className="associates__advisors__background"
                  src="../../content/images/advisors/background-advisor.webp"
                  alt=""
                />
                <span>{image}</span>
              </div>
              <div className="advisor__fullname">
                <p>{name}</p>
                <p className="advisor__lastname">{lastname}</p>
              </div>
              <p className="advisor__job__position"> {job} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associates;
