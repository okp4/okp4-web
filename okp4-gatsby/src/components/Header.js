import React from "react";
import IconLogo from "../assets/images/logo.inline.svg";
import IconArrowtr from "../assets/images/icons/arrow-tr.inline.svg";
import IconChevron from "../assets/images/icons/chevron.inline.svg";
import IconLinkedin from "../assets/images/socials/linkedin.inline.svg";
import IconTwitter from "../assets/images/socials/twitter.inline.svg";
import IconGithub from "../assets/images/socials/github.inline.svg";
import IconMedium from "../assets/images/socials/medium.inline.svg";
import IconDiscord from "../assets/images/socials/discord.inline.svg";
import IconTelegram from "../assets/images/socials/telegram.inline.svg";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__top">
          <div className="header__socials">
            <a href="" className="header__socials__link" target="_blank">
              <IconLinkedin />
            </a>
            <a href="" className="header__socials__link" target="_blank">
              <IconTwitter />
            </a>
            <a href="" className="header__socials__link" target="_blank">
              <IconGithub />
            </a>
            <a href="" className="header__socials__link" target="_blank">
              <IconMedium />
            </a>
            <a href="" className="header__socials__link" target="_blank">
              <IconDiscord />
            </a>
            <a href="" className="header__socials__link" target="_blank">
              <IconTelegram />
            </a>
          </div>
          <div className="header__lang">
            <span>FR</span>
            <IconChevron />
          </div>
        </div>
        <div className="header__bottom">
          <Link to="/" className="header__logo">
            <IconLogo />
          </Link>
          <nav className="header__navigation">
            <Link to="/" className="header__navigation__link">
              <span>Learn</span>
            </Link>
            <Link to="/" className="header__navigation__link">
              <span>Develop</span>
            </Link>
            <Link to="/" className="header__navigation__link">
              <span>Explore</span>
            </Link>
            <Link to="/" className="header__navigation__link">
              <span>Interact</span>
            </Link>
          </nav>
          <nav className="header__resources">
            <Link to="/" className="header__resources__link">
              <span>Whitepaper</span>
              <IconArrowtr />
            </Link>
            <Link to="/" className="header__resources__link">
              <span>Nemeton program</span>
              <IconArrowtr />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
