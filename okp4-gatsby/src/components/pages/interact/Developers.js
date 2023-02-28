import React, { useMemo } from "react";
import Halo from "../../animations/Halo";
import contentDevelopers from "../../../../content/pages/interact/developers.yaml";
import contentSocials from "../../../../content/transversals/socials.yaml";
import IconGithub from "../../../assets/images/socials/github.inline.svg";
import IconDiscord from "../../../assets/images/socials/discord.inline.svg";
import { StaticImage } from "gatsby-plugin-image";
import IconArrowtr from "../../../assets/images/icons/arrow-tr.inline.svg";
import DevDesign from "../../../assets/images/icons/developers/dev-design-icon.inline.svg";
import DevEcosystem from "../../../assets/images/icons/developers/dev-ecosystem-icon.inline.svg";
import DebIBC from "../../../assets/images/icons/developers/dev-ibc-icon.inline.svg";
import DevResources from "../../../assets/images/icons/developers/dev-resources-icon.inline.svg";
import DevWeb from "../../../assets/images/icons/developers/dev-web-bridges-icon.inline.svg";

const Developers = () => {
  const devSocials = useMemo(
    () => [
      {
        icon: <IconGithub />,
        title: contentSocials.github.label,
        url: contentSocials.github.url,
      },
      {
        icon: <IconDiscord />,
        title: contentSocials.discord.label,
        url: contentSocials.discord.url,
      },
    ],
    []
  );

  const devBlocks = useMemo(
    () => [
      {
        icon: <DevEcosystem />,
        title: contentDevelopers.blocks[0].title,
        description: contentDevelopers.blocks[0].text,
      },
      {
        icon: <DevDesign />,
        title: contentDevelopers.blocks[1].title,
        description: contentDevelopers.blocks[1].text,
      },
      {
        icon: <DevResources />,
        title: contentDevelopers.blocks[2].title,
        description: contentDevelopers.blocks[2].text,
      },
      {
        icon: <DevWeb />,
        title: contentDevelopers.blocks[3].title,
        description: contentDevelopers.blocks[3].text,
      },
      {
        icon: <DebIBC />,
        title: contentDevelopers.blocks[4].title,
        description: contentDevelopers.blocks[4].text,
      },
    ],
    []
  );

  return (
    <div className="developers__main">
      <Halo />
      <div className="wrapper">
        <div className="developers__intro">
          <div className="developers__intro__left">
            <h1>{contentDevelopers.title}</h1>
            <p>{contentDevelopers.description}</p>
            <div className="developers__intro__socials">
              {devSocials.map(({ icon, title, url }) => (
                <a
                  href={url}
                  className="developers__intro__socials__icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                  <span>
                    <p className="developers__intro__socials__title">{title}</p>
                    <IconArrowtr />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <StaticImage
            className="developers__intro__image"
            src="../../../../content/images/developers-intro-laptop.png"
            alt="developers OKP4"
          />
        </div>
        <div className="developers__blocks">
          {devBlocks.map(({ title, description, icon }) => (
            <div className="dev__block__container">
              <div className="dev__block__wrapper">{icon} </div>
              <div className="dev__block__text">
                <p className="dev__blocks__title"> {title}</p>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
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
