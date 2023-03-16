import React, { useMemo } from "react";
import contentPortal from "/content/pages/explore/portal.yaml";
import IconArrowtr from "/src/assets/images/icons/arrow-tr.inline.svg";
import IconRipple from "/src/assets/images/icons/ripple.inline.svg";
import IconWorkflow from "/src/assets/images/icons/workflow.inline.svg";
import IconBox from "/src/assets/images/icons/box.inline.svg";
import IconLabeller from "/src/assets/images/icons/labeller.inline.svg";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Lottie from "lottie-react";
import monitorAnimationData from "/src/assets/lottie-animations/monitor-dataspace";
import { useBreakpoint } from "../../../hook/useBreakpoint";

const Portal = () => {
  const { isLarge } = useBreakpoint();
  const features = useMemo(
    () => [
      {
        feature: contentPortal.features[0].feature,
        icon: <IconLabeller />,
        description: contentPortal.features[0].description,
      },
      {
        feature: contentPortal.features[1].feature,
        icon: <IconWorkflow />,
        description: contentPortal.features[1].description,
      },
      {
        feature: contentPortal.features[2].feature,
        icon: <IconRipple />,
        description: contentPortal.features[2].description,
      },
      {
        feature: contentPortal.features[3].feature,
        icon: <IconBox />,
        description: contentPortal.features[3].description,
      },
    ],
    []
  );

  const portalDescriptions = useMemo(
    () => [
      {
        header: contentPortal.descriptions[0].header,
        description: contentPortal.descriptions[0].description,
        image: (
          <StaticImage
            className="portal__tool__image explore"
            src="../../../assets/images/illus/index_intro_card_2.webp"
            alt="OKP4 portal explore image"
          />
        ),
      },
      {
        header: contentPortal.descriptions[1].header,
        description: contentPortal.descriptions[1].description,
        image: (
          <div className="portal__tool__lottie__wrapper">
            <div className="portal__background__halo" />
            <Lottie
              animationData={monitorAnimationData}
              className={"portal__tool__image monitor"}
            />
          </div>
        ),
      },
    ],
    []
  );
  return (
    <div className="portal__main">
      <div className="portal__discover">
        <h1>{contentPortal.discover.header}</h1>
        <p>
          The OKP4 portal is a web app that allows navigating the entire OKP4
          ecosystem. It aggregates all the information and resources to explore{" "}
          <Link className="portal__inline__link" to="/learn/dataverse/">
            the Dataverse
          </Link>
          .
        </p>
        <a
          className="portal__discover__button disabled"
          href=""
          rel="noreferrer"
          target="_blank"
        >
          {contentPortal.discover.button.text} <IconArrowtr />
        </a>
        <p>{contentPortal.discover.button.soon}</p>
      </div>
      <div className="portal__homepage__image">
        {isLarge ? (
          <StaticImage
            src="../../../assets/images/illus/portal-homepage.webp"
            alt="OKP4 portal homepage image"
          />
        ) : (
          <StaticImage
            src="../../../assets/images/illus/portal-homepage-mobile.webp"
            alt="OKP4 portal homepage image"
          />
        )}

        <div className="portal__background__halo" />
      </div>
      <div className="portal__tool">
        <div className="portal__tool__features__description">
          <h2>{contentPortal.featuresHeader}</h2>
          <p>
            Anyone can access the portal – connect a wallet to share data &
            services, create{" "}
            <Link className="portal__inline__link" to="/learn/dataspace">
              Data Spaces
            </Link>
            , access resources, or initiate workflows!
          </p>
        </div>
        <div className="portal__tool__features">
          <StaticImage
            className="portal__background__image"
            src="../../../assets/images/illus/background_img_northern_light.webp"
            alt="background northern light image"
          />
          {features.map(({ icon, feature, description }) => (
            <div className="portal__tool__feature" key={feature}>
              <div className="portal__tool__feature__icon">{icon}</div>
              <p>{feature}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="portal__tool__descriptions">
          {portalDescriptions.map(({ header, description, image }) => (
            <div className="portal__tool__description">
              {image}
              <div className="portal__tool__description__wrapper">
                <h2>{header}</h2>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portal;
