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
            alt="Logo Occitanie"
          />
        </div>
        <div className="footer__partenaires__item">
          <StaticImage
            className="imgWrapper"
            src="../assets/images/logos/bpi.webp"
            alt="Logo BPI France"
          />
        </div>
        <div className="footer__partenaires__item">
          <StaticImage
            className="imgWrapper"
            src="../assets/images/logos/bretagne.webp"
            alt="Logo Bretagne"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Partners;
