import React from "react";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import IconGithub from "/src/assets/images/socials/github.inline.svg";
import IconDiscord from "/src/assets/images/socials/discord.inline.svg";

const Docs = () => {
  return (
    <section className="docs">
      <div className="wrapper">
        <div className="docs__header">
          <h3>News & Docs</h3>
          <p>
            Join our community of developers, data & service providers, users
            and businesses focused on building the next generation of
            applications.
          </p>
        </div>
        <div className="docs__content">
          <a
            href="https://docs.okp4.network/docs/whitepaper/abstract"
            className="docs__content__item docs__content__item--large"
            target="_blank"
            rel="noreferrer"
          >
            <p className="title">Whitepaper & documentation</p>
            <p className="description">
              Eager to understand OKP4 and join the community? Read our docs
              here.
            </p>
            <IconArrowtr />
          </a>
          <a
            href="https://blog.okp4.network/"
            className="docs__content__item docs__content__item--large"
            target="_blank"
            rel="noreferrer"
          >
            <p className="title">Our blog</p>
            <p className="description">
              Follow the latest content and publications on the OKP4 blog.
            </p>
            <IconArrowtr />
          </a>
          <div className="docs__content__right">
            <a
              href="https://github.com/okp4"
              className="docs__content__item docs__content__item--small"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub className="social" />
              <p className="title">Github</p>
              <IconArrowtr className="arrow" />
            </a>
            <a
              href="https://discord.com/invite/okp4"
              className="docs__content__item docs__content__item--small"
              target="_blank"
              rel="noreferrer"
            >
              <IconDiscord className="social" />
              <p className="title">Discord</p>
              <IconArrowtr className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
