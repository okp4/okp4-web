import React from "react";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import IconGithub from "/src/assets/images/socials/github.inline.svg";
import IconDiscord from "/src/assets/images/socials/discord.inline.svg";
import contentFooter from "/content/transversals/footer.yaml";
import contentSocials from "/content/transversals/socials.yaml";

const Docs = () => {
  return (
    <section className="docs">
      <div className="wrapper">
        <div className="docs__header">
          <h3>{contentFooter.newsAndDocs.title}</h3>
          <p>{contentFooter.newsAndDocs.text}</p>
        </div>
        <div className="docs__content">
          <a
            href={contentFooter.newsAndDocs.whitecard1.url}
            className="docs__content__item docs__content__item--large"
            target="_blank"
            rel="noreferrer"
          >
            <p className="title">
              {contentFooter.newsAndDocs.whitecard1.title}
            </p>
            <p className="description">
              {contentFooter.newsAndDocs.whitecard1.text}
            </p>
            <IconArrowtr />
          </a>
          <a
            href={contentFooter.newsAndDocs.whitecard2.url}
            className="docs__content__item docs__content__item--large"
            target="_blank"
            rel="noreferrer"
          >
            <p className="title">
              {contentFooter.newsAndDocs.whitecard2.title}
            </p>
            <p className="description">
              {contentFooter.newsAndDocs.whitecard2.text}
            </p>
            <IconArrowtr />
          </a>
          <div className="docs__content__right">
            <a
              href={contentSocials.github.url}
              className="docs__content__item docs__content__item--small"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub className="social" />
              <p className="title">{contentSocials.github.label}</p>
              <IconArrowtr className="arrow" />
            </a>
            <a
              href={contentSocials.discord.url}
              className="docs__content__item docs__content__item--small"
              target="_blank"
              rel="noreferrer"
            >
              <IconDiscord className="social" />
              <p className="title">{contentSocials.discord.label}</p>
              <IconArrowtr className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
