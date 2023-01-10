import React, { useEffect, useRef } from "react";
import IconLogo from "../assets/images/logo.inline.svg";
import IconArrowtr from "../assets/images/icons/arrow-tr.inline.svg";
import IconChevron from "../assets/images/icons/chevron.inline.svg";
import IconLinkedin from "../assets/images/socials/linkedin.inline.svg";
import IconTwitter from "../assets/images/socials/twitter.inline.svg";
import IconGithub from "../assets/images/socials/github.inline.svg";
import IconMedium from "../assets/images/socials/medium.inline.svg";
import IconDiscord from "../assets/images/socials/discord.inline.svg";
import IconTelegram from "../assets/images/socials/telegram.inline.svg";
import IconBurger from "../assets/images/icons/burger.inline.svg";
import IconBurgerCross from "../assets/images/icons/burger-cross.inline.svg";
import { Link } from "gatsby";
import * as ResponsiveManager from "../utils/ResponsiveManager.js";
import * as ScrollManager from "../utils/ScrollManager.js";
import contentSocials from "/content/transversals/socials.yaml";
import contentHeader from "/content/transversals/header.yaml";

const Header = () => {
  const divRef = useRef(null);
  const divMobile = useRef(null);

  const getRatio = () => {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const scrollY = window.scrollY;
    const distance = windowHeight;
    let percentTravelled = (distance - scrollY) / distance;
    if (percentTravelled < 0) percentTravelled = 0;

    return percentTravelled;
  };

  const scrollStarted = () => {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (window.scrollY < windowHeight + 100) {
      divRef.current.classList.remove("is-reset");
      let ratio = getRatio();
      if (ResponsiveManager.isWindowLarger("lg")) {
        divRef.current.style.opacity = ratio;
      } else {
        divMobile.current.style.opacity = ratio;
      }
    } else {
      divRef.current.classList.add("is-reset");
    }
  };

  const toggleBurger = () => {
    divRef.current.classList.toggle("burger-opened");
    if (divRef.current.classList.contains("burger-opened")) {
      ScrollManager.disableScroll();
    } else {
      ScrollManager.enableScroll();
    }
  };

  useEffect(() => {
    setTimeout(function () {
      window.addEventListener("scroll", scrollStarted);
      ResponsiveManager.initViewportHeightForMobile();

      return () => {
        window.removeEventListener("scroll", scrollStarted);
      };
    }, 1000);
  });

  return (
    <header className="header" ref={divRef}>
      <div className="header--mobile" ref={divMobile}>
        <Link to="/" className="header--mobile__logo">
          <IconLogo />
        </Link>
        <div className="header--mobile__burger" onClick={toggleBurger}>
          <IconBurger className="header--mobile__burger__open" />
          <IconBurgerCross className="header--mobile__burger__close" />
        </div>
      </div>
      <div className="wrapper header--desktop">
        <div className="header__top">
          <div className="header__top__message">
            <p
              dangerouslySetInnerHTML={{ __html: contentHeader.messageSocial }}
            ></p>
          </div>
          <div className="header__socials">
            <a
              href={contentSocials.linkedin.url}
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedin />
            </a>
            <a
              href={contentSocials.twitter.url}
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconTwitter />
            </a>
            <a
              href={contentSocials.github.url}
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub />
            </a>
            <a
              href={contentSocials.medium.url}
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconMedium />
            </a>
            <a
              href={contentSocials.discord.url}
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconDiscord />
            </a>
            <a
              href={contentSocials.telegram.url}
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconTelegram />
            </a>
          </div>
          {/* <div className="header__lang">
            <span>FR</span>
            <IconChevron />
          </div> */}
        </div>
        <div className="header__bottom">
          <Link to="/" className="header__logo">
            <IconLogo />
          </Link>
          {/* <nav className="header__navigation">
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
          </nav> */}
          <nav className="header__resources">
            <a
              href={contentSocials.whitepaper.url}
              className="header__resources__link"
              target="_blank"
              rel="noreferrer"
            >
              <span>{contentSocials.whitepaper.label}</span>
              <IconArrowtr />
            </a>
            <a
              href={contentSocials.nemeton.url}
              className="header__resources__link"
              target="_blank"
              rel="noreferrer"
            >
              <span>{contentSocials.nemeton.label}</span>
              <IconArrowtr />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
