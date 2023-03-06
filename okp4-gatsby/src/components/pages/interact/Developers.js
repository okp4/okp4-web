import React, { useMemo } from "react";
import contentDevelopers from "../../../../content/pages/interact/developers.yaml";
import contentSocials from "../../../../content/transversals/socials.yaml";
import IconGithub from "../../../assets/images/socials/github.inline.svg";
import IconDiscord from "../../../assets/images/socials/discord.inline.svg";
import { StaticImage } from "gatsby-plugin-image";
import Halo from "../../animations/Halo";
import IconArrowtr from "../../../assets/images/icons/arrow-tr.inline.svg";
import DevDesign from "../../../assets/images/icons/developers/dev-design-icon.inline.svg";
import DevEcosystem from "../../../assets/images/icons/developers/dev-ecosystem-icon.inline.svg";
import DebIBC from "../../../assets/images/icons/developers/dev-ibc-icon.inline.svg";
import DevResources from "../../../assets/images/icons/developers/dev-resources-icon.inline.svg";
import DevWeb from "../../../assets/images/icons/developers/dev-web-bridges-icon.inline.svg";
import classNames from "classnames";

const Developers = () => {
  const devBlocks = useMemo(
    () => [
      {
        icon: <DevEcosystem />,
        title: contentDevelopers.blocks[0].title,
        description: contentDevelopers.blocks[0].text,
        label: contentDevelopers.blocks[0].label,
      },
      {
        icon: <DevDesign />,
        title: contentDevelopers.blocks[1].title,
        description: contentDevelopers.blocks[1].text,
        label: contentDevelopers.blocks[1].label,
      },
      {
        icon: <DevResources />,
        title: contentDevelopers.blocks[2].title,
        description: contentDevelopers.blocks[2].text,
        label: contentDevelopers.blocks[2].label,
      },
      {
        icon: <DevWeb />,
        title: contentDevelopers.blocks[3].title,
        description: contentDevelopers.blocks[3].text,
        label: contentDevelopers.blocks[3].label,
      },
      {
        icon: <DebIBC />,
        title: contentDevelopers.blocks[4].title,
        description: contentDevelopers.blocks[4].text,
        label: contentDevelopers.blocks[4].label,
      },
    ],
    []
  );

  return (
    <div className="developers__main">
      <Halo />
      <div className="wrapper">
        <div className="developers__intro">
          <h1 className="developers__title">{contentDevelopers.title}</h1>
          <p className="developers__description">
            {contentDevelopers.description}
          </p>
          <div className="social__media">
            <a
              href={contentSocials.github.url}
              className="socials__link github"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub />
              <span>
                <p className="text">{contentSocials.github.label}</p>
                <IconArrowtr className="arrow" />
              </span>
            </a>

            <a
              href={contentSocials.discord.url}
              className="socials__link discord"
              target="_blank"
              rel="noreferrer"
            >
              <IconDiscord />
              <span>
                <p className="text">{contentSocials.discord.label}</p>
                <IconArrowtr className="arrow" />
              </span>{" "}
            </a>
          </div>
          <div className="developers__intro__image">
            <StaticImage
              src="../../../assets/images/illus/laptop.png"
              alt="developers OKP4"
            />
          </div>
        </div>
        <div className="developers__blocks">
          {devBlocks.map(({ title, description, icon, label }) => (
            <div className={classNames("dev__block__container", label)}>
              <div className="dev__block__wrapper">{icon} </div>
              <div className="dev__block__text">
                <p className="dev__blocks__title"> {title}</p>
                <p className="dev__blocks__description">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="background__image" />

        <div className="developers__halo" />
        <div
          className="developers__last__paragraph"
          dangerouslySetInnerHTML={{
            __html: contentDevelopers.paragraph,
          }}
        />
      </div>
    </div>
  );
};

export default Developers;
