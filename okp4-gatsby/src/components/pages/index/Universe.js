import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import StickyUniverse from "../../animations/StickyUniverse.js";
import StrateRoadmap from "../../animations/StrateRoadmap.js";

const Universe = () => {
  return (
    <section className="universe strate">
      <div className="strate__inner">
        <div className="wrapper">
          <StickyUniverse classContainer="universe__wrapper">
            <h2 className="universe__title">Enter in the OKP4 universe</h2>
            <div className="universe__items">
              <div
                className="universe__item is-first-active"
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
              <div className="universe__illus__item" data-item="dataverseapps">
                <StaticImage
                  className="imgWrapper"
                  src="../../../assets/images/illus/index_universe_dataverse_apps.png"
                  alt="Dataverse Apps"
                />
              </div>
              <div className="universe__illus__item" data-item="dk">
                <StaticImage
                  className="imgWrapper"
                  src="../../../assets/images/illus/index_universe_dk.png"
                  alt="Development kit"
                />
              </div>
              <div className="universe__illus__item" data-item="dataverse">
                <StaticImage
                  className="imgWrapper"
                  src="../../../assets/images/illus/index_universe_dataverse.png"
                  alt="Blockchain"
                />
              </div>
              <div
                className="universe__illus__item is-first-active"
                data-item="blockchain"
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
                      specific and sovereign blockchain. This was when we chose
                      the Cosmos SDK.
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <StaticImage
                      className="imgWrapper"
                      src="../../../assets/images/illus/index_roadmap_1.png"
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
                      After more than two years of research and development
                      using the Cosmos SDK as a starting point, OKP4 launched
                      its Nemeton Public Testnet on the 17th of October, 2022.
                    </p>
                    <p className="description">
                      The Nemeton era is the bootstrapping era. This is when the
                      ideas & concepts are expressed to the public. This is when
                      the first validators join together to power the network,
                      test its limits and contribute to its developments. This
                      is when the first builders come to explore Data Space
                      possibilities and opportunities for them and their
                      communities. This is where the community unites around the
                      vision of a new generation of applications enabled by
                      trust-minimized sharing of digital resources. <br />
                      The Nemeton era will result in a stable, battle-tested
                      environment and will give birth to the OKP4 mainnet.
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <StaticImage
                      className="imgWrapper"
                      src="../../../assets/images/illus/index_roadmap_2.png"
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
                  <span className="roadmap__item__text--mobile">— Mirdin</span>
                  <div className="roadmap__item__text">
                    <span className="title">— Mirdin</span>
                    <p className="excerpt">
                      The X era begins with the first iteration of our mainnet:
                      a stable decentralized network ready to host many Data
                      Spaces and Applications. The X era focuses on making OKP4
                      as easy to use as possible while being highly generic and
                      customizable.
                    </p>
                    <p className="description">
                      This environment is powered by a network of nodes operated
                      by the community, which is economically secured through a
                      sound, scarce and publicly traded $KNOW token. The
                      community of builders deploys many existing or innovative
                      governance rules for Data Spaces publicly for the first
                      time, enabling new mechanisms to align interests among
                      participants (data providers, services providers, users…).
                      The community of token holders and validators takes
                      control, through governance proposals and votes, of the
                      reins of the network. The incentives schemes enable the
                      onboarding of many community members across all roles. The
                      X era also sees the first generation of IBC channels
                      enabling tokens to flow to and from the interchain, and
                      the emergence of the first proto-interchain applications.
                      At the end of the X era, impactful business & community
                      powered-applications emerged, and the community has grown
                      tremendously due to the many opportunities offered to
                      them. The robust OKP4 SDK and Dataverse Gateways bring us
                      into the next era: Y.
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <StaticImage
                      className="imgWrapper"
                      src="../../../assets/images/illus/index_roadmap_3.png"
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
                      Unlike the X era, which started at a single point in time
                      when the mainnet launched, the transition to Y happened
                      gradually.
                    </p>
                    <p className="description">
                      While X was focused on building the infrastructure, the Y
                      era is now focused on adoption. With each release relating
                      to the SDK, the Dataverse Gateways or the governance
                      templates, new opportunities emerged for builders, data &
                      service providers and users. The Y era is the climax of
                      adoption due to the easiness and straightforwardness of
                      building and onboarding communities. The Dataverse reaches
                      a critical network effect: the many datasets and services
                      available provide unprecedented opportunities for builders
                      and becomes a significant go-to-market fo data & services
                      providers. An ecosystem of Data Space governance tokens
                      emerges, providing healthy competition between them and
                      steering open innovation to the next level. Real-life use
                      cases and value flows into the network and the OKP4 public
                      good continues to grow.
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <StaticImage
                      className="imgWrapper"
                      src="../../../assets/images/illus/index_roadmap_4.png"
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
              <div className="roadmap__item">
                <div className="roadmap__item__layer"></div>
                <div className="roadmap__item__container">
                  <span className="roadmap__item__text--mobile">— Lugh</span>
                  <div className="roadmap__item__text">
                    <span className="title">— Lugh</span>
                    <p className="excerpt">
                      The Z era is the expression of the unstoppable nature of
                      OKP4s design.
                    </p>
                    <p className="description">
                      Inter-blockchain communication is now the norm and OKP4 is
                      interoperable with every meaningful network to access any
                      kind of datasets and services (decentralized storage,
                      decentralized computation…), onboard communities from
                      other chains easily, and seamless interchain applications.
                      Due to OKP4 first-mover advantage and significant network
                      effect reached, OKP4 becomes the default coordination
                      layer for most applications based on distributed
                      resources. Thousands of projects and teams across the web2
                      and web3 worlds are building on OKP4: it has reached mass
                      adoption.
                    </p>
                  </div>
                  <div className="roadmap__item__illus">
                    <StaticImage
                      className="imgWrapper"
                      src="../../../assets/images/illus/index_roadmap_5.png"
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
