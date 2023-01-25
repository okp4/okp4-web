import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import contentFooter from "/content/transversals/footer.yaml";

const Partners = () => {
  return (
    <div className="footer__partenaires">
      <div className="wrapper">
        <p>{contentFooter.messageCofounded}</p>
        <div className="footer__partenaires__items">
          <div className="footer__partenaires__item">
            <StaticImage
              className="imgWrapper"
              src="../assets/images/logos/occitanie.png"
              alt="Logo Occitanie"
            />
          </div>
          <div className="footer__partenaires__item">
            <StaticImage
              className="imgWrapper"
              src="../assets/images/logos/bpi.png"
              alt="Logo BPI France"
            />
          </div>
          <div className="footer__partenaires__item">
            <StaticImage
              className="imgWrapper"
              src="../assets/images/logos/bretagne.png"
              alt="Logo Bretagne"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
