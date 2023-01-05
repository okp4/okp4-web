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

const Header = () => {
  const divRef = useRef(null);

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
      divRef.current.style.opacity = ratio;
    } else {
      divRef.current.classList.add("is-reset");
    }
  };

  const toggleBurger = () => {
    divRef.current.classList.toggle("burger-opened");
  };

  useEffect(() => {
    setTimeout(function () {
      window.addEventListener("scroll", scrollStarted);

      return () => {
        window.removeEventListener("scroll", scrollStarted);
      };
    }, 1000);
  }, []);

  return (
    <header className="header" ref={divRef}>
      <div className="header--mobile">
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
            <p>Follow our adventures !</p>
          </div>
          <div className="header__socials">
            <a
              href="https://www.linkedin.com/company/okp4-open-knowledge-protocol-for/"
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedin />
            </a>
            <a
              href="https://twitter.com/OKP4_Protocol"
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconTwitter />
            </a>
            <a
              href="https://github.com/okp4"
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub />
            </a>
            <a
              href="https://blog.okp4.network/"
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconMedium />
            </a>
            <a
              href="https://discord.com/invite/okp4"
              className="header__socials__link"
              target="_blank"
              rel="noreferrer"
            >
              <IconDiscord />
            </a>
            <a
              href="https://t.me/okp4network"
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
              href="https://docs.okp4.network/docs/whitepaper/abstract"
              className="header__resources__link"
              target="_blank"
              rel="noreferrer"
            >
              <span>Whitepaper</span>
              <IconArrowtr />
            </a>
            <a
              href="/https://nemeton.okp4.network/"
              className="header__resources__link"
              target="_blank"
              rel="noreferrer"
            >
              <span>Nemeton program</span>
              <IconArrowtr />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
