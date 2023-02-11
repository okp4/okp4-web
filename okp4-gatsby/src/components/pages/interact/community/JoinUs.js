import React, { useMemo } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../../utils/MediaManager.js";
import Halo from "../../../animations/Halo";
import Parallax from "../../../animations/Parallax";
import contentCommunity from "../../../../../content/pages/interact/community.yaml";
import contentSocials from "../../../../../content/transversals/socials.yaml";
import IconLinkedin from "../../../../assets/images/socials/linkedin.inline.svg";
import IconTwitter from "../../../../assets/images/socials/twitter.inline.svg";
import IconGithub from "../../../../assets/images/socials/github.inline.svg";
import IconDiscord from "../../../../assets/images/socials/discord.inline.svg";
import IconTelegram from "../../../../assets/images/socials/telegram.inline.svg";
import IconArrowtr from "../../../../assets/images/icons/arrow-tr.inline.svg";
import classNames from "classnames";

const JoinUs = ({ files }) => {
  const socials = useMemo(
    () => [
      {
        label: contentSocials.socials[0].label,
        url: contentSocials.socials[0].url,
        icon: <IconLinkedin />,
      },
      {
        label: contentSocials.socials[1].label,
        url: contentSocials.socials[1].url,
        icon: <IconTwitter />,
      },
      {
        label: contentSocials.socials[2].label,
        url: contentSocials.socials[2].url,
        icon: <IconGithub />,
      },
      {
        label: contentSocials.socials[4].label,
        url: contentSocials.socials[4].url,
        icon: <IconDiscord />,
      },
      {
        label: contentSocials.socials[5].label,
        url: contentSocials.socials[5].url,
        icon: <IconTelegram />,
      },
    ],
    []
  );

  return (
    <section className="community--join_us">
      <Halo />
      <div className="wrapper">
        <div className="community__content">
          <div className="community_landing_wrapper">
            <div className="community_titles">
              <h1>{contentCommunity.title}</h1>
              <p className="subtitle">{contentCommunity.subtitle}</p>
            </div>
            <div className="community__image--container">
              <GatsbyImage
                className="community__image"
                image={MediaManager.GetImage(contentCommunity.image, files)}
                alt={contentCommunity.title}
              />
            </div>
          </div>

        <div className="background_img"></div>

          <div class="social_media">
            {socials.map(({ label, url, icon }) => (
              <a
                href={url}
                className={classNames("socials__link", label.toLowerCase())}
                key={label}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
                <span>
                  <p className="text">{label}</p>
                  <IconArrowtr className="arrow" />
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinUs;
