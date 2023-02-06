import React, { useEffect, useRef } from "react";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";
import * as ScrollManager from "../../../utils/ScrollManager.js";
import * as ResponsiveManager from "../../../utils/ResponsiveManager.js";
import contentLanding from "/content/pages/index/hero.yaml";

const Landing = () => {
  const divRef = useRef(null);
  const divFadeOut = useRef(null);
  const divFadeIn = useRef(null);

  const scrollStarted = () => {
    if (window.scrollY < 410 && divFadeIn.current) {
      const scrollY = window.scrollY;
      const distance = 400;
      let percentTravelled = scrollY / distance;
      if (percentTravelled > 1) percentTravelled = 1;

      if (percentTravelled < 0) percentTravelled = 0;
      divFadeIn.current.style.opacity = percentTravelled;
    }
  };

  const perspective = () => {
    if (divRef.current) {
      let startScale = divRef.current.dataset.start;
      let endScale = divRef.current.dataset.end;

      if (window.scrollY >= startScale && window.scrollY <= endScale) {
        let ratio = ScrollManager.getScaleRatio({ startScale, endScale });

        let scaleRatio = (1 - ratio / 10).toFixed(4);
        if (divFadeOut.current) {
          let scaleCss =
            "scale3d(" + scaleRatio + "," + scaleRatio + "," + scaleRatio + ")";
          divFadeOut.current.style.transform = scaleCss;

          let opacityRatioOut = (1 - ratio * 2).toFixed(4);
          divFadeOut.current.style.opacity = opacityRatioOut;
        }
      }

      divRef.current.querySelectorAll("[data-parallax]").forEach((elem) => {
        if (ScrollManager.isIntersectingViewport(divFadeIn.current)) {
          var ratio = ScrollManager.getIntersectionRatio(divFadeIn.current);
          var transformRatio;
          var parallaxEnd = parseInt(elem.dataset.parallaxend);

          if (ResponsiveManager.isWindowSmaller("lg")) {
            parallaxEnd = parallaxEnd / 2;
          }

          transformRatio = (ratio.toFixed(4) * parallaxEnd).toFixed(4);

          var transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
          elem.style.transform = transformRatioCss;
        }
      });

      divRef.current.rafId = requestAnimationFrame(perspective);
    }
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.rafId = 0;
      var divDimensions = divRef.current.getBoundingClientRect();
      var divAbsoluteTop = divDimensions.top + window.scrollY;
      var startScale = 0;

      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      var endScale = windowHeight;
      divRef.current.dataset.top = divAbsoluteTop;
      divRef.current.dataset.start = startScale;
      divRef.current.dataset.end = endScale;
      divRef.current.dataset.raf = 0;

      setTimeout(function () {
        if (divRef.current) {
          divRef.current.rafId = requestAnimationFrame(perspective);
          window.addEventListener("scroll", scrollStarted);
          return () => {
            cancelAnimationFrame(divRef.current.rafId);
            window.removeEventListener("scroll", scrollStarted);
          };
        }
      }, 1000);
    }
  });

  return (
    <section className="landing" ref={divRef}>
      <Halo></Halo>
      <div className="wrapper">
        <div className="landing__fade" ref={divFadeOut}>
          <h1>
            {contentLanding.title.line1.split(" ").map((data, index) => {
              return (
                <span className="title-wrap" key={index}>
                  <span>{data}</span>
                </span>
              );
            })}
            <br />
            {contentLanding.title.line2.split(" ").map((data, index) => {
              return (
                <span className="title-wrap" key={index}>
                  <span>{data}</span>
                </span>
              );
            })}
          </h1>
          <p className="subtitle">
            <span
              dangerouslySetInnerHTML={{
                __html: contentLanding.subtitle,
              }}
            ></span>
          </p>
        </div>
        <div className="landing__illus" ref={divFadeIn}>
          <StaticImage
            className="imgWrapper--base"
            src="../../../assets/images/illus/index_landing.jpg"
            alt="OKP4 hero image"
            loading="eager"
          />
          <div className="landing__illus__wrapper">
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="200"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/calque-1.png"
                alt="OKP4 hero image"
                loading="eager"
              />
            </div>

            <div className="parallaxWrapper">
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/calque-2.png"
                alt="OKP4 hero image"
                loading="eager"
              />
            </div>

            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="200"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/calque-3.png"
                alt="OKP4 hero image"
                loading="eager"
              />
            </div>

            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="350"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/calque-4.png"
                alt="OKP4 hero image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
