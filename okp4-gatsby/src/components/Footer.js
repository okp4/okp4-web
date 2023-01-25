import React, { useRef, useEffect } from "react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../utils/MediaManager.js";
import { Link } from "gatsby";
import IconLogo from "../assets/images/logo.inline.svg";
import IconArrowtr from "../assets/images/icons/arrow-tr.inline.svg";
import IconArrowtop from "../assets/images/icons/arrow-tc.inline.svg";
import IconLinkedin from "../assets/images/socials/linkedin.inline.svg";
import IconTwitter from "../assets/images/socials/twitter.inline.svg";
import IconGithub from "../assets/images/socials/github.inline.svg";
import IconMedium from "../assets/images/socials/medium.inline.svg";
import IconDiscord from "../assets/images/socials/discord.inline.svg";
import IconTelegram from "../assets/images/socials/telegram.inline.svg";
import Halo from "./animations/Halo.js";
import Docs from "./Docs.js";
import Partners from "./Partners";
import Newsletter from "./Newsletter.js";
import contentSocials from "/content/transversals/socials.yaml";
import contentFooter from "/content/transversals/footer.yaml";

const Footer = ({ files, withDocsAndPartners = false }) => {
  const divScrollTop = useRef(null);
  var scrollPos = 0;
  var scrollDirection = "down";

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) scrollTop();
  };

  const scrollStarted = () => {
    if (window.scrollY > scrollPos) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }
    scrollPos = window.scrollY;
    if (scrollPos > 100 && scrollDirection === "up")
      divScrollTop.current.classList.add("is-active");
    else divScrollTop.current.classList.remove("is-active");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollStarted);
    return () => {
      window.removeEventListener("scroll", scrollStarted);
    };
  });

  return (
    <>
      <div
        className="scrollToTop"
        ref={divScrollTop}
        onClick={scrollTop}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className="scrollToTop__container">
          <IconArrowtop />
          <span>Back to top</span>
        </div>
      </div>
      <footer className="footer">
        <Halo />
        {withDocsAndPartners && (
          <div className="footer__sticky">
            <Docs />
            <Partners />
          </div>
        )}

        <div className="footer__main">
          <div className="footer__main__bg">
            <GatsbyImage
              className="imgWrapper"
              image={MediaManager.GetImage(
                contentFooter.imageFooter.url,
                files
              )}
              alt={contentFooter.imageFooter.alt}
              objectFit="contain"
              objectPosition="50% 100%"
            />
          </div>
          <div className="wrapper">
            <div className="footer__main__top">
              <IconLogo className="footer__main__top__logo" />
              <div className="footer__main__top__links">
                <a
                  href={contentSocials.faq.url}
                  className="footer__main__top__links__item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{contentSocials.faq.label}</span>
                  <IconArrowtr />
                </a>
                <a
                  href={contentSocials.whitepaper.url}
                  className="footer__main__top__links__item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{contentSocials.whitepaper.label}</span>
                  <IconArrowtr />
                </a>
                <a
                  href={contentSocials.nemeton.url}
                  className="footer__main__top__links__item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{contentSocials.nemeton.label}</span>
                  <IconArrowtr />
                </a>
                <a
                  href={contentSocials.pollen.url}
                  className="footer__main__top__links__item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{contentSocials.pollen.label}</span>
                  <IconArrowtr />
                </a>
                <a
                  href={contentSocials.contact.url}
                  className="footer__main__top__links__item footer__main__top__links__item--button"
                >
                  <span>{contentSocials.contact.label}</span>
                  <IconArrowtr />
                </a>
              </div>
            </div>
            <div className="footer__main__bottom">
              <div className="footer__main__bottom__newsletter">
                <p
                  dangerouslySetInnerHTML={{
                    __html: contentFooter.messageNewsletter,
                  }}
                ></p>
                <div className="footer__main__bottom__newsletter__form">
                  <Newsletter />
                </div>
              </div>
              <div className="footer__main__bottom__socials">
                <a
                  href={contentSocials.linkedin.url}
                  className="footer__main__bottom__socials__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconLinkedin />
                </a>
                <a
                  href={contentSocials.twitter.url}
                  className="footer__main__bottom__socials__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconTwitter />
                </a>
                <a
                  href={contentSocials.github.url}
                  className="footer__main__bottom__socials__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconGithub />
                </a>
                <a
                  href={contentSocials.medium.url}
                  className="footer__main__bottom__socials__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconMedium />
                </a>
                <a
                  href={contentSocials.discord.url}
                  className="footer__main__bottom__socials__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconDiscord />
                </a>
                <a
                  href={contentSocials.telegram.url}
                  className="footer__main__bottom__socials__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconTelegram />
                </a>
              </div>
            </div>
            <div className="footer__main__sitemap">
              <span className="footer__main__sitemap__item">
                OKP4 {new Date().getFullYear()} Copyright
              </span>
              <a
                href={contentFooter.sitemap.url}
                className="footer__main__sitemap__item"
                target="_blank"
                rel="noreferrer"
              >
                {contentFooter.sitemap.text}
              </a>
              <Link
                className="footer__main__sitemap__item"
                to="/legal-mentions"
              >
                {contentFooter.legals.text}
              </Link>
              <a
                href="https://w2p-digital.com/"
                className="footer__main__sitemap__item footer__main__sitemap__item--w2p"
                target="_blank"
                rel="noreferrer"
              >
                Made by W2P Digital
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
