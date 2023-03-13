import * as React from "react";
import Halo from "../../animations/Halo";
import contentLegalMentions from "/content/pages/legals/legal-mentions.yaml";
import contentCookiePolicy from "/content/pages/legals/cookie-policy.yaml";
import { StaticImage } from "gatsby-plugin-image";

const LegalMentionsAndCookiePolicy = () => (
  <section className="main-content">
    <StaticImage
      className="header_halo"
      src="../../../assets/images/illus/header-halo.webp"
      alt="header halo"
      loading="eager"
    />
    <Halo />
    <div className="wrapper">
      <div className="legalMentions__content">
        <div>
          <h1>{contentLegalMentions.title}</h1>
          <div className="legalMentions__items">
            {contentLegalMentions.items.map((item, index) => (
              <div data-key={index} key={index} className="legalMentions__item">
                <h4 className="title">{item.title}</h4>
                <p
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: item.text,
                  }}
                ></p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>{contentCookiePolicy.title}</h3>
          <br />
          <p
            className="subtitle"
            dangerouslySetInnerHTML={{
              __html: contentCookiePolicy.subtitle,
            }}
          ></p>
          <div className="legalMentions__items">
            {contentCookiePolicy.items.map((item, index) => (
              <div data-key={index} key={index} className="legalMentions__item">
                <h4 className="title">{item.title}</h4>
                <p
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: item.text,
                  }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LegalMentionsAndCookiePolicy;
