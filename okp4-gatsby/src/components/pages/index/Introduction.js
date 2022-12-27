import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";

const Introduction = () => {
  return (
    <section className="strate introduction">
      <div className="wrapper">
        <h2 className="introduction__title">
          New opportunities for every digital ressource
        </h2>
        <p className="introduction__text">
          OKP4 is the only <b>public layer-1 blockchain</b> designed for
          coordination of digital assets such as datasets, algorithms, software,
          storage or computation. Anyone can build and join custom
          <Link className="cta--icon" to="/">
            <span>Data Spaces</span>
            <IconArrowtr />
          </Link>
          where rules are shared and value flows between participants.
        </p>
        <p className="introduction__catch">
          Let’s build amazing things together!
        </p>
        <div className="grid introduction__cards">
          <div className="introduction__cards__item">
            <div className="introduction__cards__item__illus">
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_intro_card_1.png"
                alt="Easy to build data spaces and applications"
              />
            </div>
            <p className="title">Easy to build</p>
            <p className="text">Data Spaces and Applications</p>
          </div>

          <div className="introduction__cards__item">
            <div className="introduction__cards__item__illus">
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_intro_card_2.png"
                alt="Built in Trust and custom governance"
              />
            </div>
            <p className="title">Built in Trust</p>
            <p className="text">and custom governance</p>
          </div>

          <div className="introduction__cards__item">
            <div className="introduction__cards__item__illus">
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_intro_card_3.png"
                alt="Optimal incentives for collaboration"
              />
            </div>
            <p className="title">Optimal incentives</p>
            <p className="text">for collaboration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
