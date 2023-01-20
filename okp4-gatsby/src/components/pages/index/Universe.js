import React, { useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as ResponsiveManager from "../../../utils/ResponsiveManager.js";
import StickyUniverse from "../../animations/StickyUniverse.js";
import StrateRoadmap from "../../animations/StrateRoadmap.js";
import Halo from "../../animations/Halo.js";
import contentUniverse from "/content/pages/index/universe.yaml";
import contentRoadmap from "/content/pages/index/roadmap.yaml";

const Universe = () => {
  const roadmapItems = useRef(null);

  const setViewMore = () => {
    let items = roadmapItems.current.querySelectorAll(".roadmap__item__text");

    items.forEach((item) => {
      let rectHeight = item.getBoundingClientRect().height;
      rectHeight -= 40;
      let title = item.querySelector(".title");
      let titleHeight = title.getBoundingClientRect().height;
      let excerpt = item.querySelector(".excerpt");
      let excerptHeight = excerpt.getBoundingClientRect().height;
      let description = item.querySelector(".description");
      let descriptionHeight = description.getBoundingClientRect().height;
      let realHeight = titleHeight + excerptHeight + descriptionHeight;

      if (realHeight > rectHeight) {
        item.classList.add("togglable");
        item.addEventListener("click", viewMoreText);
      }
    });
  };

  const viewMoreText = (ev) => {
    let roadmap__item__text = ev.target.parentNode.parentNode;
    if (roadmap__item__text.classList.contains("show-more")) {
      roadmap__item__text.scroll(0, 0);
    }
    roadmap__item__text.classList.toggle("show-more");
  };

  useEffect(() => {
    if (ResponsiveManager.isWindowSmaller("sm")) {
      let items = roadmapItems.current.querySelectorAll(
        ".roadmap__item__readMore"
      );
      items.forEach((item) => {
        item.addEventListener("click", viewMoreText);
      });
    } else {
      setViewMore();
    }
  });

  return (
    <section className="universe strate">
      <div className="strate__inner">
        <div className="wrapper">
          <StickyUniverse classContainer="universe__wrapper">
            <Halo></Halo>
            <div className="universe__sticky">
              <h2 className="universe__title">{contentUniverse.title}</h2>
              <div className="universe__illus">
                <div
                  className="universe__illus__item"
                  data-item="dg"
                  data-infinite="1"
                >
                  <StaticImage
                    className="imgWrapper"
                    src="../../../assets/images/illus/index_universe_dataverse_apps.png"
                    alt="Dataverse Apps"
                  />
                </div>
                <div
                  className="universe__illus__item"
                  data-item="dk"
                  data-infinite="1"
                >
                  <StaticImage
                    className="imgWrapper"
                    src="../../../assets/images/illus/index_universe_dk.png"
                    alt="Development kit"
                  />
                </div>
                <div
                  className="universe__illus__item"
                  data-item="dataverse"
                  data-infinite="1"
                >
                  <StaticImage
                    className="imgWrapper"
                    src="../../../assets/images/illus/index_universe_dataverse.png"
                    alt="Blockchain"
                  />
                </div>
                <div
                  className="universe__illus__item is-active"
                  data-item="blockchain"
                  data-infinite="1"
                >
                  <StaticImage
                    className="imgWrapper"
                    src="../../../assets/images/illus/index_universe_blockchain.png"
                    alt="Blockchain"
                  />
                </div>
              </div>
            </div>
            <div className="universe__items">
              {contentUniverse.items.map((item, index) => {
                let isActive = "";
                if (index === 0) isActive = " is-active";
                return (
                  <div
                    className={`universe__item${isActive}`}
                    data-item={item.identifiant}
                    data-key={index}
                    key={index}
                  >
                    <div className="tag">
                      <span>{item.tag}</span>
                    </div>
                    <p className="title">{item.title}</p>
                    <p className="text">{item.description}</p>
                  </div>
                );
              })}
              {/* <div
                className="universe__item is-active"
                data-item="blockchain"
                data-key="0"
              >
                <div className="tag">
                  <span>OKP4</span>
                </div>
                <p className="title">Blockchain</p>
                <p className="text">
                  The first blockchain designed for digital assets sharing &
                  coordination.
                </p>
              </div>
              <div
                className="universe__item"
                data-item="dataverse"
                data-key="1"
              >
                <div className="tag">
                  <span>OKP4</span>
                </div>
                <p className="title">Dataverse</p>
                <p className="text">
                  The ever-extanding universe comprised of all the Datasets,
                  Algorithms, Softwares, Infrastructures and other resources
                  referenced in the Blockchain and shared within multiple Data
                  Spaces.
                </p>
              </div>
              <div className="universe__item" data-item="dk" data-key="2">
                <div className="tag">
                  <span>OKP4</span>
                </div>
                <p className="title">Development kit</p>
                <p className="text">
                  Tools and services dedicated to developers to create their own
                  apps using the OKP4 protocol.
                </p>
              </div>
              <div
                className="universe__item"
                data-item="dataverseapps"
                data-key="3"
              >
                <div className="tag">
                  <span>OKP4</span>
                </div>
                <p className="title">Dataverse Gateways</p>
                <p className="text">
                  OKP4 Dataverse Gateways enable anyone to interact with, build
                  into, share and contribute and earn from the Dataverse.
                </p>
              </div> */}
            </div>
          </StickyUniverse>

          <div className="roadmap">
            <div className="roadmap__intro">
              <h2 className="roadmap__title">{contentRoadmap.title}</h2>
              <p className="title">{contentRoadmap.subtitle}</p>
              <p
                className="text"
                dangerouslySetInnerHTML={{
                  __html: contentRoadmap.description,
                }}
              >
                {/* OKP4 is a blockchain built for the coordination of digital
                resources.
                <br /> This is is the only blockchain where
                <b> developers can find the perfect environment</b> to build a
                new generation of applications based on digital resources
                (datasets, algorithms, storage, computation…){" "}
                <b>shared by participants </b>
                (communities and businesses). */}
              </p>
            </div>
            <div className="roadmap__items" ref={roadmapItems}>
              <StrateRoadmap
                classContainer={"roadmap__item"}
                scaleTopSticky="20"
                scaleMax="0.2"
              >
                <div className="roadmap__item__layer"></div>
                <div className="roadmap__item__container">
                  <span className="roadmap__item__text--mobile">— Genesis</span>
                  <div className="roadmap__item__text">
                    <span className="title">— Genesis</span>
                    <p className="excerpt">
                      The story began in 2018 with a vision of addressing the
                      two main issues relating to data sharing: lack of trust
                      and lack of interest alignment between participants.
                    </p>
                    <p className="description">
                      It led to the first B2B use cases with OKP4 Company as a
                      centralized coordinator to experiment with the many
                      governance rules and refine our value proposition. After
                      two years of experimentation, we were ready to work on
                      decentralization. Realizing there was no decentralized
                      network specifically designed for such use cases, we
                      quickly concluded that we needed to create our own
                      specific and sovereign blockchain. We then chose the
                      Cosmos SDK to build it.
                      <br />
                      <br />
                      After two more years of research and development using the
                      Cosmos SDK as a starting point, OKP4 was ready for the
                      Nemeton era.
                      <span className="roadmap__item__readMore">
                        <span className="readMore--closed">Read more</span>
                        <span className="readMore--opened">Read less</span>
                      </span>
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <div className="roadmap__item__date">
                      <span>2018 - 2022</span>
                    </div>
                    <StaticImage
                      className="imgWrapper imgWrapper--desktop"
                      src="../../../assets/images/illus/index_roadmap_1.jpg"
                      alt="Roadmap : Genesis"
                    />
                    <StaticImage
                      className="imgWrapper imgWrapper--mobile"
                      src="../../../assets/images/illus/index_roadmap_1_mobile.jpg"
                      alt="Roadmap : Genesis"
                    />
                  </div>
                </div>
              </StrateRoadmap>
              <StrateRoadmap
                classContainer={"roadmap__item"}
                scaleTopSticky="45"
                scaleMax="0.15"
              >
                <div className="roadmap__item__layer"></div>
                <div className="roadmap__item__container">
                  <span className="roadmap__item__text--mobile">— Nemeton</span>
                  <div className="roadmap__item__text">
                    <span className="title">— Nemeton</span>
                    <p className="excerpt">
                      OKP4 launched its Nemeton Public Testnet on the 17th of
                      October, 2022.
                    </p>
                    <p className="description">
                      The Nemeton era is the bootstrapping era. This is when the
                      ideas & concepts are expressed to the public.This is when
                      the first validators join together to power the network,
                      test its limits and contribute to its developments.
                      <br />
                      <br />
                      This is when the first builders come to explore Data Space
                      possibilities and opportunities for them and their
                      communities, resulting in the first OKP4-powered
                      decentralized use cases operated by communities of
                      pioneers. This is where the community unites around the
                      vision of a new generation of applications enabled by
                      trust-minimized sharing of digital resources. Nemeton
                      becomes the host for existing use cases.
                      <br />
                      <br />
                      The Nemeton era results in a stable, battle-tested
                      environment and gives birth to the OKP4 mainnet.
                      <span className="roadmap__item__readMore">
                        <span className="readMore--closed">Read more</span>
                        <span className="readMore--opened">Read less</span>
                      </span>
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <div className="roadmap__item__date">
                      <span>Q4 2022 – Q2 2023</span>
                    </div>
                    <StaticImage
                      className="imgWrapper imgWrapper--desktop"
                      src="../../../assets/images/illus/index_roadmap_2.jpg"
                      alt="Roadmap : Nemeton"
                    />
                    <StaticImage
                      className="imgWrapper imgWrapper--mobile"
                      src="../../../assets/images/illus/index_roadmap_2_mobile.jpg"
                      alt="Roadmap : Nemeton"
                    />
                  </div>
                </div>
              </StrateRoadmap>
              <StrateRoadmap
                classContainer={"roadmap__item"}
                scaleTopSticky="70"
                scaleMax="0.1"
              >
                <div className="roadmap__item__layer"></div>
                <div className="roadmap__item__container">
                  <span className="roadmap__item__text--mobile">— Myrddin</span>
                  <div className="roadmap__item__text">
                    <span className="title">— Myrddin</span>
                    <p className="excerpt">
                      Get ready for the Myrddin era, where OKP4 mainnet is
                      unleashed and the decentralized network come to life. The
                      main focus is making OKP4 easy to use and highly
                      customizable, hosted on a community-operated network
                      secured by the scarce, publicly traded $KNOW token.
                    </p>
                    <p className="description">
                      Watch as the community of builders deploys new governance
                      rules for Data Spaces and participants find new designs to
                      coordinate themselves and build epic innovative
                      applications. Token holders and validators take control
                      through governance proposals and votes, creating an
                      involved and diverse community.
                      <br />
                      <br />
                      IBC channels enable token flow between chains and pave the
                      way for the first proto-interchain apps. By the end of the
                      Myrddin era, we'll see impactful businesses and
                      community-powered applications enabled by OKP4. The
                      powerful OKP4 SDK and Dataverse Gateways releases take us
                      into the Duir era...
                      <span className="roadmap__item__readMore">
                        <span className="readMore--closed">Read more</span>
                        <span className="readMore--opened">Read less</span>
                      </span>
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <div className="roadmap__item__date">
                      <span>Q3 2023</span>
                    </div>
                    <StaticImage
                      className="imgWrapper  imgWrapper--desktop"
                      src="../../../assets/images/illus/index_roadmap_3.jpg"
                      alt="Roadmap : Mirdin"
                    />
                    <StaticImage
                      className="imgWrapper imgWrapper--mobile"
                      src="../../../assets/images/illus/index_roadmap_3_mobile.jpg"
                      alt="Roadmap : Mirdin"
                    />
                  </div>
                </div>
              </StrateRoadmap>
              <StrateRoadmap
                classContainer={"roadmap__item"}
                scaleTopSticky="95"
                scaleMax="0.05"
              >
                <div className="roadmap__item__layer"></div>
                <div className="roadmap__item__container">
                  <span className="roadmap__item__text--mobile">— Duir</span>
                  <div className="roadmap__item__text">
                    <span className="title">— Duir</span>
                    <p className="excerpt">
                      Unlike the Myrddin era, which starts at a single point in
                      time when the mainnet launched, the transition to Duir
                      happen gradually.
                    </p>
                    <p className="description">
                      While Myrddin is focused on building the infrastructure,
                      the Duir era is focused on adoption. With each release
                      relating to the SDK, the Dataverse Gateways or the
                      governance templates, new opportunities emerge for
                      builders, data & service providers and users. The Duir era
                      is the climax of adoption due to the easiness and
                      straightforwardness of building and onboarding
                      communities.
                      <br />
                      <br />
                      The Dataverse reaches a critical network effect: the many
                      datasets and services available provide unprecedented
                      opportunities for builders and becomes a significant
                      go-to-market fo data & services providers. An ecosystem of
                      Data Space governance tokens emerges, providing healthy
                      competition between them and steering open innovation to
                      the next level. Real-life use cases and value flows into
                      the network and the OKP4 public good continues to grow.
                      <span className="roadmap__item__readMore">
                        <span className="readMore--closed">Read more</span>
                        <span className="readMore--opened">Read less</span>
                      </span>
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <div className="roadmap__item__date">
                      <span>Q2 2024</span>
                    </div>
                    <StaticImage
                      className="imgWrapper imgWrapper--desktop"
                      src="../../../assets/images/illus/index_roadmap_4.jpg"
                      alt="Roadmap : Duir"
                    />
                    <StaticImage
                      className="imgWrapper imgWrapper--mobile"
                      src="../../../assets/images/illus/index_roadmap_4_mobile.jpg"
                      alt="Roadmap : Duir"
                    />
                  </div>
                </div>
              </StrateRoadmap>
              {/* <StrateRoadmap
              classContainer={"roadmap__item roadmap__item--last"}
              scaleTopSticky="150"
              scaleMax="0.08"
            > */}
              <div className="roadmap__item roadmap__item--last">
                <div className="roadmap__item__layer"></div>
                <div className="roadmap__item__container">
                  <span className="roadmap__item__text--mobile">— Lugh</span>
                  <div className="roadmap__item__text">
                    <span className="title">— Lugh</span>
                    <p className="excerpt">
                      The Lugh era is the expression of the unstoppable nature
                      of OKP4s design.
                    </p>
                    <p className="description">
                      Inter- blockchain communication is now the norm and OKP4
                      is interoperable with every meaningful network to access
                      any kind of datasets and services (decentralized storage,
                      decentralized computation...), onboard communities from
                      other chains easily, and seamless interchain applications.
                      <br />
                      <br />
                      Due to OKP4 first-mover advantage and significant network
                      effect reached, OKP4 becomes the default coordination
                      layer for most applications based on distributed
                      resources.
                      <br />
                      <br />
                      Thousands of projects and teams across the web2 and web3
                      worlds are building on OKP4: it has reached mass adoption.
                      <span className="roadmap__item__readMore">
                        <span className="readMore--closed">Read more</span>
                        <span className="readMore--opened">Read less</span>
                      </span>
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <div className="roadmap__item__date">
                      <span>Q1 2025</span>
                    </div>
                    <StaticImage
                      className="imgWrapper imgWrapper--desktop"
                      src="../../../assets/images/illus/index_roadmap_5.jpg"
                      alt="Roadmap : Lugh"
                    />
                    <StaticImage
                      className="imgWrapper imgWrapper--mobile"
                      src="../../../assets/images/illus/index_roadmap_5_mobile.jpg"
                      alt="Roadmap : Lugh"
                    />
                  </div>
                </div>
              </div>
              {/* </StrateRoadmap> */}
              {/* <div className="roadmap__items__bottom"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universe;
