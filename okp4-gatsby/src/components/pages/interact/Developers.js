import React, { useMemo } from "react";
import Halo from "../../animations/Halo";
import contentDevelopers from "../../../../content/pages/interact/developers.yaml";
import contentSocials from "../../../../content/transversals/socials.yaml";
import IconGithub from "../../../assets/images/socials/github.inline.svg";
import IconDiscord from "../../../assets/images/socials/discord.inline.svg";

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
        url: contentSocials.discords.url,
      },
    ],
    []
  );

  return (
    <div className="developers__main">
      <Halo />
      <div className="wrapper">
        <div className="developers__intro">
          <h1>{contentDevelopers.title}</h1>
          <p>{contentDevelopers.description}</p>
          {console.log(contentSocials)}
          {/* {devSocials.map(({ icon, title, url }) => (
            <a href={url} className="developers__intro__socials" target="_blank"
            rel="noreferrer">
              {icon}
              <p>{title}</p>
            </a>
          ))} */}
          <p>{contentSocials.github.label}</p>
        </div>
      </div>
    </div>
  );
};

export default Developers;
