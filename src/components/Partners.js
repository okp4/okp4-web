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
            alt="Region Occitanie Support - OKP4"
          />
        </div>
        <div className="footer__partenaires__item">
          <StaticImage
            className="imgWrapper"
            src="../assets/images/logos/bpi.webp"
            alt="BPI France Support - OKP4"
          />
        </div>
        <div className="footer__partenaires__item">
          <StaticImage
            className="imgWrapper"
            src="../assets/images/logos/bretagne.webp"
            alt="Region Bretagne Support - OKP4"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Partners;
