import * as React from "react";
import Halo from "../../animations/Halo";
import Parallax from "../../animations/Parallax";
import contentCommunity from "../../../../content/pages/community/community.yaml";
import contentSocials from "../../../../content/transversals/socials.yaml";
import IconLinkedin from "../../../assets/images/socials/linkedin.inline.svg";
import IconTwitter from "../../../assets/images/socials/twitter.inline.svg";
import IconGithub from "../../../assets/images/socials/github.inline.svg";
import IconDiscord from "../../../assets/images/socials/discord.inline.svg";
import IconTelegram from "../../../assets/images/socials/telegram.inline.svg";
import IconArrowtr from "../../../assets/images/icons/arrow-tr.inline.svg";
import { StaticImage } from "gatsby-plugin-image";

const JoinUs = () => (
  <section className="community">
    <Halo />
    <div className="wrapper">
      <div className="community__content">
        <div className="community_landing_wrapper">
          <div className="community_titles">
            <h2>{contentCommunity.title}</h2>
            <p className="subtitle">{contentCommunity.subtitle}</p>
          </div>
          <StaticImage
            className="img"
            src="../../../assets/images/illus/community_Beltaine.png"
            alt="OKP4 community image"
            loading="eager"
          />
        </div>
        <div class="social_media">
          <a
            href={contentSocials.linkedin.url}
            className="socials__link linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedin />
            <div className="icon_colored">{/* <IconLinkedinColored /> */}</div>
            <span>
              <p className="text">{contentSocials.linkedin.label}</p>
              <IconArrowtr />
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
              <IconArrowtr />
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
              <IconArrowtr />
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
              <IconArrowtr />
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
              <IconArrowtr />
            </span>{" "}
          </a>
        </div>

        <div className="grid community_white_cards">
          <Parallax
            classContainer="community_white_cards_item"
            parallaxStart="100"
            parallaxEnd="-100"
            parallaxMiddle="0.5"
          >
            <p className="title">{contentCommunity.card1.title}</p>
            <p className="text">{contentCommunity.card1.content}</p>
            <a
              className="arrow_icon"
              href={contentCommunity.card1.url}
              target="_blank"
              rel="noreferrer"
            >
              <IconArrowtr />
            </a>
          </Parallax>
          <Parallax
            classContainer="community_white_cards_item"
            parallaxStart="50"
            parallaxEnd="-50"
            parallaxMiddle="0.5"
          >
            <p className="title">{contentCommunity.card2.title}</p>
            <p className="text">{contentCommunity.card2.content}</p>
            <a
              className="arrow_icon"
              href={contentCommunity.card2.url}
              target="_blank"
              rel="noreferrer"
            >
              <IconArrowtr />
            </a>
          </Parallax>
          <Parallax
            classContainer="community_white_cards_item"
            parallaxStart="150"
            parallaxEnd="-150"
            parallaxMiddle="0.5"
          >
            <p className="title">{contentCommunity.card3.title}</p>
            <p className="text">{contentCommunity.card3.content}</p>
            <a
              className="arrow_icon"
              href={contentCommunity.card3.url}
              target="_blank"
              rel="noreferrer"
            >
              <IconArrowtr />
            </a>
          </Parallax>
        </div>
      </div>
    </div>
  </section>
);

export default JoinUs;
