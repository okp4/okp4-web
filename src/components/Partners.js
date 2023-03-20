import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import contentFooter from "/content/transversals/footer.yaml";

const Partners = () => (
  <div className="footer__partenaires">
    <div className="wrapper">
      <p>{contentFooter.messageCofounded}</p>
      <div className="footer__partenaires__items">
        <div className="footer__partenaires__item">
          <StaticImage
            className="imgWrapper"
            src="../assets/images/logos/occitanie.webp"
            alt={contentFooter.associates.partners[0]}
          />
        </div>
        <div className="footer__partenaires__item">
          <StaticImage
            className="imgWrapper"
            src="../assets/images/logos/bpi.webp"
            alt={contentFooter.associates.partners[0]}
          />
        </div>
        <div className="footer__partenaires__item">
          <StaticImage
            className="imgWrapper"
            src="../assets/images/logos/bretagne.webp"
            alt={contentFooter.associates.partners[2]}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Partners;
