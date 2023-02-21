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
            src="../../content/images/companies/logo-chainlayer.png"
            alt={contentFooter.associates.companies.logos[0].label}
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
            src="../../content/images/companies/logo-interchain.png"
            alt={contentFooter.associates.companies.logos[1].label}
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
            src="../../content/images/companies/logo-cc-validators.png"
            alt={contentFooter.associates.companies.logos[2].label}
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
            src="../../content/images/companies/logo-b-harvest.png"
            alt={contentFooter.associates.companies.logos[3].label}
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
            src="../../content/images/companies/logo-stakelab.png"
            alt={contentFooter.associates.companies.logos[4].label}
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
            src="../../content/images/companies/logo-p2p.png"
            alt={contentFooter.associates.companies.logos[5].label}
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
            src="../../content/images/companies/logo-polkachu.png"
            alt={contentFooter.associates.companies.logos[6].label}
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
            src="../../content/images/companies/logo-notional.png"
            alt={contentFooter.associates.companies.logos[7].label}
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
            src="../../content/images/companies/logo-imperator.png"
            alt={contentFooter.associates.companies.logos[8].label}
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
            src="../../content/images/companies/logo-citadelone.png"
            alt={contentFooter.associates.companies.logos[9].label}
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
            src="../../content/images/companies/logo-staking-cabin.png"
            alt={contentFooter.associates.companies.logos[10].label}
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
            src="../../content/images/companies/logo-nodestake.png"
            alt={contentFooter.associates.companies.logos[11].label}
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
            src="../../content/images/companies/logo-informal.png"
            alt={contentFooter.associates.companies.logos[12].label}
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
            src="../../content/images/companies/logo-nest.png"
            alt={contentFooter.associates.companies.logos[13].label}
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
            src="../../content/images/advisors/advisor-peter-van-mourik.png"
            alt="OKP4 Advisor"
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
            src="../../content/images/advisors/advisor-benjamin-santi.png"
            alt="OKP4 Advisor"
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
            src="../../content/images/advisors/advisor-jasvin-bhasin.png"
            alt="OKP4 Advisor"
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
            src="../../content/images/advisors/advisor-sebastien-couture.png"
            alt="OKP4 Advisor"
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
            <div className="associates__advisor__card" key={name + lastname}>
              <span>{image}</span>
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
