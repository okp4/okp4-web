import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../../utils/MediaManager.js";
import Parallax from "../../../animations/Parallax";
import contentCommunity from "../../../../../content/pages/interact/community.yaml";
import contentSocials from "../../../../../content/transversals/socials.yaml";
import IconLinkedin from "../../../../assets/images/socials/linkedin.inline.svg";
import IconTwitter from "../../../../assets/images/socials/twitter.inline.svg";
import IconGithub from "../../../../assets/images/socials/github.inline.svg";
import IconDiscord from "../../../../assets/images/socials/discord.inline.svg";
import IconTelegram from "../../../../assets/images/socials/telegram.inline.svg";
import IconArrowtr from "../../../../assets/images/icons/arrow-tr.inline.svg";

const JoinUs = ({ files }) => (
  <section className="community--join_us">
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
              alt={contentCommunity.alt}
              loading="eager"
            />
          </div>
        </div>

        <div className="background_img"></div>

        <div className="social_media">
          <a
            href={contentSocials.linkedin.url}
            className="socials__link linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedin />
            <span>
              <p className="text">{contentSocials.linkedin.label}</p>
              <IconArrowtr className="arrow" />
            </span>
          </a>

          <a
            href={contentSocials.twitter.url}
            className="socials__link twitter"
            target="_blank"
            rel="noreferrer"
          >
            <IconTwitter />
            <span>
              <p className="text">{contentSocials.twitter.label}</p>
              <IconArrowtr className="arrow" />
            </span>{" "}
          </a>

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
            </span>{" "}
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

          <a
            href={contentSocials.telegram.url}
            className="socials__link telegram"
            target="_blank"
            rel="noreferrer"
          >
            <IconTelegram />
            <span>
              <p className="text">{contentSocials.telegram.label}</p>
              <IconArrowtr className="arrow" />
            </span>{" "}
          </a>
        </div>

        <div className="community_white_cards">
          <Parallax parallaxStart="100" parallaxEnd="-100" parallaxMiddle="0.5">
            <a
              href={contentCommunity.card1.url}
              target="_blank"
              rel="noreferrer"
            >
              <p className="card_title">{contentCommunity.card1.title}</p>
              <p className="text">{contentCommunity.card1.content}</p>
              <div className="arrow_icon">
                <IconArrowtr />
              </div>
            </a>
          </Parallax>
          <Parallax parallaxStart="50" parallaxEnd="-50" parallaxMiddle="0.5">
            <a
              href={contentCommunity.card2.url}
              target="_blank"
              rel="noreferrer"
            >
              <p className="card_title">{contentCommunity.card2.title}</p>
              <p className="text">{contentCommunity.card2.content}</p>
              <div className="arrow_icon">
                <IconArrowtr />
              </div>
            </a>
          </Parallax>
          <Parallax parallaxStart="150" parallaxEnd="-150" parallaxMiddle="0.5">
            <a
              href={contentCommunity.card3.url}
              target="_blank"
              rel="noreferrer"
            >
              <p className="card_title">{contentCommunity.card3.title}</p>
              <p className="text">{contentCommunity.card3.content}</p>
              <div className="arrow_icon">
                <IconArrowtr />
              </div>
            </a>
          </Parallax>
        </div>
      </div>
    </div>
  </section>
);

export default JoinUs;
