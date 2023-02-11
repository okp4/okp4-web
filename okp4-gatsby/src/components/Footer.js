import React, { useRef, useEffect, useMemo } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
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

const Footer = ({ files, withDocs = true, withPartners = true }) => {
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

  const topLinks = useMemo(
    () => [
      {
        label: contentSocials.socials[8].label,
        url: contentSocials.socials[8].url,
        className: "footer__main__top__links__item",
      },
      {
        label: contentSocials.socials[6].label,
        url: contentSocials.socials[6].url,
        className: "footer__main__top__links__item",
      },
      {
        label: contentSocials.socials[7].label,
        url: contentSocials.socials[7].url,
        className: "footer__main__top__links__item",
      },
      {
        label: contentSocials.socials[9].label,
        url: contentSocials.socials[9].url,
        className:
          "footer__main__top__links__item footer__main__top__links__item--button",
      },
    ],
    []
  );

  const bottomSocials = useMemo(
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
        <div className="footer__sticky">
          {withDocs && <Docs />}
          {withPartners && <Partners />}
        </div>

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
                {topLinks.map(({ label, url, className }) => (
                  <a
                    href={url}
                    className={className}
                    key={label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{label}</span>
                    <IconArrowtr />
                  </a>
                ))}
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
                {bottomSocials.map(({ label, url, icon }) => (
                  <a
                    href={url}
                    className="footer__main__bottom__socials__link"
                    key={label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                ))}
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
