import React, { useMemo } from "react";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import IconGithub from "/src/assets/images/socials/github.inline.svg";
import IconDiscord from "/src/assets/images/socials/discord.inline.svg";
import contentFooter from "/content/transversals/footer.yaml";
import contentSocials from "/content/transversals/socials.yaml";

const Docs = () => {
  const socials = useMemo(
    () => [
      {
        label: contentSocials.socials[2].label,
        url: contentSocials.socials[2].url,
        icon: <IconGithub className="social" />,
      },
      {
        label: contentSocials.socials[4].label,
        url: contentSocials.socials[4].url,
        icon: <IconDiscord className="social" />,
      },
    ],
    []
  );

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
            {socials.map(({ label, url, icon }) => (
              <a
                href={url}
                className="docs__content__item docs__content__item--small"
                key={label}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
                <p className="title">{label}</p>
                <IconArrowtr className="arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
