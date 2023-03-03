import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import contentDevelopmentKit from "/content/pages/develop/developmentKit.yaml";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import Lottie from "lottie-react";
import mechanicalGearsAnimationData from "/src/assets/lottie-animations/mechanical-gears";

const DevelopmentKit = () => (
  <div className="developmentkit__main">
    <div className="developmentkit__description__wrapper empower">
      <div className="developmentkit__description">
        <h1>{contentDevelopmentKit.empower.header}</h1>
        <p>{contentDevelopmentKit.empower.description}</p>
      </div>
      <StaticImage
        className="developmentkit__description__image"
        src="../../../assets/images/illus/open_laptop_without_logo.png"
        alt="open laptop"
        loading="eager"
      />
    </div>
    <div className="developmentkit__description__wrapper create">
      <div className="developmentkit__description">
        <h2>{contentDevelopmentKit.create.header}</h2>
        <p>{contentDevelopmentKit.create.description}</p>
      </div>
      <StaticImage
        className="developmentkit__description__image"
        src="../../../assets/images/illus/ephemeral-book.png"
        alt="opened ephemeral book"
        loading="eager"
      />
    </div>
    <div className="developmentkit__description__wrapper design-system">
      <div className="developmentkit__description__image__wrapper">
        <StaticImage
          className="developmentkit__description__image cauldron"
          src="../../../assets/images/illus/index_universe_dk_cropped.png"
          alt="crystal cauldron"
          loading="eager"
        />
      </div>
      <div className="developmentkit__description">
        <h2>{contentDevelopmentKit.designSystem.header}</h2>
        <p>{contentDevelopmentKit.designSystem.description}</p>
        <div className="developmentkit__button__wrapper">
          <a
            className="developmentkit__button disabled"
            href=""
            rel="noreferrer"
            target="_blank"
          >
            {contentDevelopmentKit.designSystem.button} <IconArrowtr />
          </a>
          <p>{contentDevelopmentKit.designSystem.soon}</p>
        </div>
      </div>
    </div>
    <div className="developmentkit__description__wrapper governance-templates">
      <div className="developmentkit__description">
        <h2>{contentDevelopmentKit.governanceTemplates.header}</h2>
        {contentDevelopmentKit.governanceTemplates.description.map(
          (paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )
        )}
      </div>
      <Lottie animationData={mechanicalGearsAnimationData} className={""} />
      <div className="developmentkit__background__halo" />
    </div>
    <div className="developmentkit__description__wrapper tools">
      <div className="developmentkit__description">
        <h2>{contentDevelopmentKit.tools.header}</h2>
        <p>{contentDevelopmentKit.tools.description}</p>
      </div>
      <div className="developmentkit__background__light" />
    </div>
    <div className="developmentkit__description__wrapper protocol">
      <StaticImage
        className="developmentkit__description__image"
        src="../../../assets/images/illus/data-structure.png"
        alt="data structure"
        loading="eager"
      />
      <div className="developmentkit__description">
        <h2>{contentDevelopmentKit.protocol.header}</h2>
        <p>{contentDevelopmentKit.protocol.description}</p>
      </div>
    </div>
    <div className="developmentkit__description__wrapper documentation">
      <div className="developmentkit__description">
        <h2>{contentDevelopmentKit.documentation.header}</h2>
        {contentDevelopmentKit.documentation.description.map(
          (paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{
                __html: paragraph,
              }}
            />
          )
        )}
      </div>
    </div>
  </div>
);

export default DevelopmentKit;
