// import React, { useEffect,  from "react";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import IconLogo from "../assets/images/logo.inline.svg";
import IconArrowtr from "../assets/images/icons/arrow-tr.inline.svg";
import IconLinkedin from "../assets/images/socials/linkedin.inline.svg";
import IconTwitter from "../assets/images/socials/twitter.inline.svg";
import IconGithub from "../assets/images/socials/github.inline.svg";
import IconMedium from "../assets/images/socials/medium.inline.svg";
import IconDiscord from "../assets/images/socials/discord.inline.svg";
import IconTelegram from "../assets/images/socials/telegram.inline.svg";
import Halo from "./animations/Halo.js";
import Docs from "./Docs.js";
import Newsletter from "./Newsletter.js";

const Footer = () => {
  // const divRef = useRef(null);

  // const setStickyPosition = () => {
  //   const windowHeight =
  //     window.innerHeight || document.documentElement.clientHeight;
  //   let divDimensions = divRef.current.getBoundingClientRect();
  //   let topPositionSticky = -(divDimensions.height - windowHeight);

  //   let topPositionCss = topPositionSticky + "px";
  //   divRef.current.style.top = topPositionCss;
  // };

  // useEffect(() => {
  //   setStickyPosition();
  // }, []);

  return (
    <footer className="footer">
      <Halo />
      <div className="footer__sticky">
        <Docs />
        <div className="footer__partenaires">
          <div className="wrapper">
            <p>Our actions are co-funded by</p>
            <div className="footer__partenaires__items">
              <div className="footer__partenaires__item">
                <StaticImage
                  className="imgWrapper"
                  src="../assets/images/logos/occitanie.png"
                  alt="Logo Occitanie"
                />
              </div>
              <div className="footer__partenaires__item">
                <StaticImage
                  className="imgWrapper"
                  src="../assets/images/logos/bpi.png"
                  alt="Logo BPI France"
                />
              </div>
              <div className="footer__partenaires__item">
                <StaticImage
                  className="imgWrapper"
                  src="../assets/images/logos/bretagne.png"
                  alt="Logo Bretagne"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__main__bg">
          <StaticImage
            className="imgWrapper"
            src="../assets/images/illus/footer.png"
            alt="Illustration fleurs OKP4"
          />
        </div>
        <div className="wrapper">
          <div className="footer__main__top">
            <IconLogo className="footer__main__top__logo" />
            <div className="footer__main__top__links">
              <a
                href="https://docs.okp4.network/faq"
                className="footer__main__top__links__item"
                target="_blank"
                rel="noreferrer"
              >
                <span>FAQ</span>
                <IconArrowtr />
              </a>
              <a
                href="https://docs.okp4.network/docs/whitepaper/abstract"
                className="footer__main__top__links__item"
                target="_blank"
                rel="noreferrer"
              >
                <span>Whitepaper</span>
                <IconArrowtr />
              </a>
              <a
                href="https://nemeton.okp4.network/"
                className="footer__main__top__links__item"
                target="_blank"
                rel="noreferrer"
              >
                <span>Nemeton program</span>
                <IconArrowtr />
              </a>
              <a
                href="mailto:hello@okp4.network"
                className="footer__main__top__links__item footer__main__top__links__item--button"
              >
                <span>Let’s Get In Touch</span>
                <IconArrowtr />
              </a>
            </div>
          </div>
          <div className="footer__main__bottom">
            <div className="footer__main__bottom__newsletter">
              <p>
                Follow our adventures and <b>stay up to date </b>!
              </p>
              <div className="footer__main__bottom__newsletter__form">
                <Newsletter />
              </div>
            </div>
            <div className="footer__main__bottom__socials">
              <a
                href="https://www.linkedin.com/company/okp4-open-knowledge-protocol-for/"
                className="footer__main__bottom__socials__link"
                target="_blank"
                rel="noreferrer"
              >
                <IconLinkedin />
              </a>
              <a
                href="https://twitter.com/OKP4_Protocol"
                className="footer__main__bottom__socials__link"
                target="_blank"
                rel="noreferrer"
              >
                <IconTwitter />
              </a>
              <a
                href="https://github.com/okp4"
                className="footer__main__bottom__socials__link"
                target="_blank"
                rel="noreferrer"
              >
                <IconGithub />
              </a>
              <a
                href="https://blog.okp4.network/"
                className="footer__main__bottom__socials__link"
                target="_blank"
                rel="noreferrer"
              >
                <IconMedium />
              </a>
              <a
                href="https://discord.com/invite/okp4"
                className="footer__main__bottom__socials__link"
                target="_blank"
                rel="noreferrer"
              >
                <IconDiscord />
              </a>
              <a
                href="https://t.me/okp4network"
                className="footer__main__bottom__socials__link"
                target="_blank"
                rel="noreferrer"
              >
                <IconTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
