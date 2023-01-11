import React from "react";
import { Link } from "gatsby";
import { StaticImage, getSrc } from "gatsby-plugin-image";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import Halo from "../../animations/Halo.js";
import Strate from "../../animations/Strate.js";
import Parallax from "../../animations/Parallax.js";
import content from "/content/pages/index/opportunities.yaml";

const Introduction = () => {
  return (
    <Strate classContainer={"introduction"}>
      <Halo classContainer={"halo--big"}></Halo>
      <div className="gradient">
        <div className="gradient__layer"></div>
      </div>
      <div className="wrapper">
        <h2 className="introduction__title">
          {content.title}
          {/* New opportunities for every digital ressource */}
        </h2>
        <p
          className="introduction__text"
          dangerouslySetInnerHTML={{
            __html: content.description,
          }}
        >
          {/* OKP4 is the only <b>public layer-1 blockchain</b> designed for
          coordination of digital assets such as datasets, algorithms, software,
          storage or computation. Anyone can build and join custom
          <Link className="cta--icon" to="/">
            <span>Data Spaces</span>
            <IconArrowtr />
          </Link>
          where rules are shared and value flows between participants. */}
          {/* {content.description} */}
        </p>
        <p className="introduction__catch">
          {/* Let’s build amazing things together! */}
          {content.featuredText}
        </p>
        <div className="grid introduction__cards">
          <Parallax
            classContainer="introduction__cards__item"
            parallaxStart="100"
            parallaxEnd="-100"
            parallaxMiddle="0.5"
          >
            <div className="introduction__cards__item__illus" data-infinite="1">
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_intro_card_1.png"
                alt="Easy to build data spaces and applications"
              />
            </div>
            <p className="title">{content.whitecard1.title}</p>
            <p className="text">{content.whitecard1.description}</p>
          </Parallax>
          <Parallax
            classContainer="introduction__cards__item"
            parallaxStart="50"
            parallaxEnd="-50"
            parallaxMiddle="0.5"
          >
            <div className="introduction__cards__item__illus" data-infinite="1">
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_intro_card_2.png"
                alt="Built in Trust and custom governance"
              />
            </div>
            <p className="title">Built in Trust</p>
            <p className="text">and custom governance</p>
          </Parallax>
          <Parallax
            classContainer="introduction__cards__item"
            parallaxStart="150"
            parallaxEnd="-150"
            parallaxMiddle="0.5"
          >
            <div className="introduction__cards__item__illus" data-infinite="1">
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_intro_card_3.png"
                alt="Optimal incentives for collaboration"
              />
            </div>
            <p className="title">Optimal incentives</p>
            <p className="text">for collaboration</p>
          </Parallax>
        </div>
        <div className="grid introduction__pushs">
          <div className="introduction__pushs__item introduction__pushs__item--left">
            <div className="introduction__pushs__item__illus" data-infinite="1">
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_intro_know.png"
                alt="OKP4 Know token"
              />
            </div>
            <div className="introduction__pushs__item__texts">
              <p className="title">Powered by the KNOW token</p>
              <p className="text">
                Incentives & value flows for the many use cases are enabled by
                the $KNOW. Many B2B use cases are ready to be launched, more
                community use cases will be built when the Testnet launches.
              </p>
            </div>
          </div>
          <div className="introduction__pushs__item introduction__pushs__item--right">
            <div className="introduction__pushs__item__illus" data-infinite="1">
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_intro_cosmos.png"
                alt="cosmos sdk"
              />
            </div>
            <div className="introduction__pushs__item__texts">
              <p className="title">Built on the Cosmos SDK</p>
              <p className="text">
                A smart contract hub specifically designed for Data Spaces.
              </p>
            </div>
          </div>
          <div className="introduction__pushs__item introduction__pushs__item--right">
            <div className="introduction__pushs__item__texts">
              <p className="title">Simplicity and transparency</p>
              <p className="text">
                Decentralization guarantees sovereignity of shared data and
                services, trustlessness, transparency, easy managment and
                customization of governance rules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Strate>
  );
};

export default Introduction;
