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

const Footer = () => {
  return (
    <footer className="footer">
      <Halo />
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
              <a href="" className="footer__main__top__links__item">
                <span>FAQ</span>
                <IconArrowtr />
              </a>
              <a href="" className="footer__main__top__links__item">
                <span>Whitepaper</span>
                <IconArrowtr />
              </a>
              <a href="" className="footer__main__top__links__item">
                <span>Nemeton program</span>
                <IconArrowtr />
              </a>
              <a
                href=""
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
              <div className="footer__main__bottom__newsletter__form"></div>
            </div>
            <div className="footer__main__bottom__socials">
              <a
                href=""
                className="footer__main__bottom__socials__link"
                target="_blank"
              >
                <IconLinkedin />
              </a>
              <a
                href=""
                className="footer__main__bottom__socials__link"
                target="_blank"
              >
                <IconTwitter />
              </a>
              <a
                href=""
                className="footer__main__bottom__socials__link"
                target="_blank"
              >
                <IconGithub />
              </a>
              <a
                href=""
                className="footer__main__bottom__socials__link"
                target="_blank"
              >
                <IconMedium />
              </a>
              <a
                href=""
                className="footer__main__bottom__socials__link"
                target="_blank"
              >
                <IconDiscord />
              </a>
              <a
                href=""
                className="footer__main__bottom__socials__link"
                target="_blank"
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
