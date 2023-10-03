import * as React from "react";
import contentLegalMentions from "/content/pages/legals/ambassador-program-conditions.yaml";
import { StaticImage } from "gatsby-plugin-image";

const AmbassadorLegalMentions = () => (
  <section className="main-content">
    <StaticImage
      className="header_halo"
      src="../../../assets/images/illus/header-halo.webp"
      alt=""
      loading="eager"
    />
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
      </div>
    </div>
  </section>
);

export default AmbassadorLegalMentions;
