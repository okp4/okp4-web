import React, { useEffect, useRef, useMemo } from "react";
import classNames from "classnames";
import IconLogo from "../assets/images/logo.inline.svg";
import IconArrowtr from "../assets/images/icons/arrow-tr.inline.svg";
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
import Menu from "./Menu";
import Breadcrumbs from "./Breadcrumbs";

const Header = ({ isPositionFixed = false, breadcrumbs }) => {
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
    if (divRef.current) {
      if (window.scrollY < windowHeight + 100) {
        divRef.current.classList.remove("is-reset");
        let ratio = getRatio();

        if (ResponsiveManager.isWindowLarger("lg")) {
          divRef.current.style.opacity = ratio;
        } else if (divMobile.current) {
          divMobile.current.style.opacity = ratio;
        }
      } else {
        divRef.current.classList.add("is-reset");
      }
    }
  };

  const toggleBurger = () => {
    if (divRef.current) {
      divRef.current.classList.toggle("burger-opened");
      if (divRef.current.classList.contains("burger-opened")) {
        ScrollManager.disableScroll();
      } else {
        ScrollManager.enableScroll();
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) toggleBurger();
  };

  const resourceLinks = useMemo(
    () => [
      {
        label: contentSocials.socials[8].label,
        url: contentSocials.socials[8].url,
      },
      {
        label: contentSocials.socials[7].label,
        url: contentSocials.socials[7].url,
      },
    ],
    []
  );

  const socialIcons = useMemo(
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
        label: contentSocials.socials[3].label,
        url: contentSocials.socials[3].url,
        icon: <IconMedium />,
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
    <header
      className={classNames(`header`, {
        fixed: isPositionFixed,
      })}
      ref={divRef}
    >
      <div className="header--mobile" ref={divMobile}>
        <Link to="/" className="header--mobile__logo">
          <IconLogo />
        </Link>
        <div
          className="header--mobile__burger"
          onClick={toggleBurger}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
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
            {socialIcons.map(({ label, url, icon }) => (
              <a
                href={url}
                className="header__socials__link"
                key={label}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="header__bottom">
          <Link to="/" className="header__logo">
            <IconLogo />
          </Link>
          <Menu />
          <nav className="header__resources">
            {resourceLinks.map(({ url, label }) => (
              <a
                href={url}
                className="header__resources__link"
                key={label}
                target="_blank"
                rel="noreferrer"
              >
                <span>{label}</span>
                <IconArrowtr />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </header>
  );
};

export default Header;
