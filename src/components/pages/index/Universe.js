import React, { useRef, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as MediaManager from "../../../utils/MediaManager.js";
import * as ResponsiveManager from "../../../utils/ResponsiveManager.js";
import StickyUniverse from "../../animations/StickyUniverse.js";
import StrateRoadmap from "../../animations/StrateRoadmap.js";
import contentUniverse from "/content/pages/index/universe.yaml";
import contentRoadmap from "/content/pages/index/roadmap.yaml";
import { Link } from "gatsby";

const Universe = ({ files }) => {
  const roadmapItems = useRef(null);

  const setViewMore = () => {
    let items = roadmapItems.current.querySelectorAll(
      ".homepage__roadmap__item__text"
    );

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
        ".homepage__roadmap__item__readMore"
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
            <div className="universe__sticky">
              <h2 className="universe__title">{contentUniverse.title}</h2>
              <div className="universe__illus">
                {contentUniverse.items.reverse().map((item, index) => {
                  let isActive = "";
                  if (index === 0) isActive = " is-active";
                  return (
                    <div
                      className={`universe__illus__item${isActive}`}
                      data-infinite="1"
                      key={index}
                      data-item={item.identifiant}
                      data-key={index}
                    >
                      <GatsbyImage
                        className="imgWrapper"
                        image={MediaManager.GetImage(item.image, files)}
                        alt={item.description}
                      />
                    </div>
                  );
                })}
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
                    {item.link && (
                      <Link to={item.link} className="cta__button">
                        <span className="cta__button__text">{item.button}</span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </StickyUniverse>

          <div className="homepage__roadmap">
            <div className="homepage__roadmap__intro">
              <h2 className="homepage__roadmap__title">
                {contentRoadmap.title}
              </h2>
              <p className="title">{contentRoadmap.subtitle}</p>
              <p
                className="text"
                dangerouslySetInnerHTML={{
                  __html: contentRoadmap.description,
                }}
              ></p>
              <Link to={contentRoadmap.link} className="cta__button">
                <span className="cta__button__text">
                  {contentRoadmap.button}
                </span>
              </Link>
            </div>
            <div className="homepage__roadmap__items" ref={roadmapItems}>
              {contentRoadmap.items.map((item, index) => {
                let topRoadmapSticky = 20 + index * 30;
                const scaleSteps = contentRoadmap.items.length - 1;
                const isLastItem = index === scaleSteps;
                let scaleStep = 0.2 / scaleSteps;
                let scaleMax = 0.2 - scaleStep * index;
                return (
                  <StrateRoadmap
                    classContainer={"homepage__roadmap__item"}
                    scaleTopSticky={topRoadmapSticky}
                    scaleMax={scaleMax}
                    key={index}
                    isLastItem={isLastItem}
                  >
                    <div className="homepage__roadmap__item__layer"></div>
                    <div className="homepage__roadmap__item__container">
                      <span className="homepage__roadmap__item__text--mobile">
                        — {item.title}
                      </span>
                      <div className="homepage__roadmap__item__text">
                        <span className="title">— {item.title}</span>
                        <p className="excerpt">{item.subtitle}</p>
                        <p className="description">
                          <span
                            className="text__content"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></span>
                          <span className="homepage__roadmap__item__readMore">
                            <span className="readMore--closed">Read more</span>
                            <span className="readMore--opened">Read less</span>
                          </span>
                        </p>
                      </div>
                      <div className="homepage__roadmap__item__illus">
                        <div className="homepage__roadmap__item__date">
                          <span>{item.tag}</span>
                        </div>
                        <GatsbyImage
                          className="imgWrapper imgWrapper--desktop"
                          image={MediaManager.GetImage(
                            item.imageDesktop,
                            files
                          )}
                          alt={item.subtitle}
                        />
                        <GatsbyImage
                          className="imgWrapper imgWrapper--mobile"
                          image={MediaManager.GetImage(item.imageMobile, files)}
                          alt={item.subtitle}
                        />
                      </div>
                    </div>
                  </StrateRoadmap>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universe;
