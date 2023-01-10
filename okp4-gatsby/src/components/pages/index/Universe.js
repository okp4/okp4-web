import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import StickyUniverse from "../../animations/StickyUniverse.js";
import StrateRoadmap from "../../animations/StrateRoadmap.js";
import Halo from "../../animations/Halo.js";

const Universe = () => {
  return (
    <section className="universe strate">
      <div className="strate__inner">
        <div className="wrapper">
          <StickyUniverse classContainer="universe__wrapper">
            <Halo></Halo>
            <h2 className="universe__title">Enter in the OKP4 universe</h2>
            <div className="universe__items">
              <div
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
              </div>
            </div>
            <div className="universe__illus">
              <div
                className="universe__illus__item"
                data-item="dataverseapps"
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
          </StickyUniverse>

          <div className="roadmap">
            <div className="roadmap__intro">
              <h2 className="roadmap__title">ROADMAP</h2>
              <p className="title">The next era for the knowledge economy</p>
              <p className="text">
                OKP4 is a blockchain built for the coordination of digital
                resources.
                <br /> This is is the only blockchain where
                <b> developers can find the perfect environment</b> to build a
                new generation of applications based on digital resources
                (datasets, algorithms, storage, computation…){" "}
                <b>shared by participants </b>
                (communities and businesses).
              </p>
            </div>
            <div className="roadmap__items">
              <StrateRoadmap
                classContainer={"roadmap__item"}
                scaleTopSticky="30"
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
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
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
                scaleTopSticky="60"
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
                      ideas & concepts are expressed to the public.
                      <br />
                      This is when the first validators join together to power
                      the network, test its limits and contribute to its
                      developments.
                      <br />
                      This is when the first builders come to explore Data Space
                      possibilities and opportunities for them and their
                      communities, resulting in the first OKP4-powered
                      decentralized use cases operated by communities of
                      pioneers.
                      <br />
                      This is where the community unites around the vision of a
                      new generation of applications enabled by trust-minimized
                      sharing of digital resources. Nemeton becomes the host for
                      existing use cases.
                      <br />
                      <br />
                      The Nemeton era results in a stable, battle-tested
                      environment and gives birth to the OKP4 mainnet.
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
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
                scaleTopSticky="90"
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
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
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
                scaleTopSticky="120"
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
                      the next level.
                      <br />
                      <br />
                      Real-life use cases and value flows into the network and
                      the OKP4 public good continues to grow.
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
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
              classContainer={"roadmap__item"}
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
                      <br />
                      <br />
                      Inter- blockchain communication is now the norm and OKP4
                      is interoperable with every meaningful network to access
                      any kind of datasets and services (decentralized storage,
                      decentralized computation...), onboard communities from
                      other chains easily, and seamless interchain applications.
                    </p>
                    <p className="description">
                      Due to OKP4 first-mover advantage and significant network
                      effect reached, OKP4 becomes the default coordination
                      layer for most applications based on distributed
                      resources.
                      <br />
                      <br />
                      Thousands of projects and teams across the web2 and web3
                      worlds are building on OKP4: it has reached mass adoption.
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
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
