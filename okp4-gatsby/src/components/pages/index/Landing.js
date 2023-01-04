import React, { useEffect, useRef } from "react";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";
import * as ScrollManager from "../../../utils/ScrollManager.js";
import * as ResponsiveManager from "../../../utils/ResponsiveManager.js";

const Landing = () => {
  const divRef = useRef(null);
  const divFadeOut = useRef(null);
  const divFadeIn = useRef(null);
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const scrollStarted = () => {
    if (window.scrollY < 410) {
      const scrollY = window.scrollY;
      const distance = 400;
      let percentTravelled = scrollY / distance;
      if (percentTravelled > 1) percentTravelled = 1;

      if (percentTravelled < 0.02) percentTravelled = 0.02;
      divFadeIn.current.style.opacity = percentTravelled;
    }
  };

  const perspective = () => {
    let startScale = divRef.current.dataset.start;
    let endScale = divRef.current.dataset.end;

    if (window.scrollY >= startScale && window.scrollY <= endScale) {
      let ratio = ScrollManager.getScaleRatio({ startScale, endScale });

      let scaleRatio = (1 - ratio / 10).toFixed(4);
      let scaleCss =
        "scale3d(" + scaleRatio + "," + scaleRatio + "," + scaleRatio + ")";
      divFadeOut.current.style.transform = scaleCss;

      let opacityRatioOut = (1 - ratio).toFixed(4);
      divFadeOut.current.style.opacity = opacityRatioOut;
    }

    if (ResponsiveManager.isWindowLarger("md")) {
      divRef.current.querySelectorAll("[data-parallax]").forEach((elem) => {
        if (ScrollManager.isIntersectingViewport(divFadeIn.current)) {
          var ratio = ScrollManager.getIntersectionRatio(divFadeIn.current);
          var transformRatio;
          var parallaxEnd = parseInt(elem.dataset.parallaxend);
          transformRatio = ratio.toFixed(4) * parallaxEnd;

          var transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
          elem.style.transform = transformRatioCss;
        }
      });
    }

    requestAnimationFrame(perspective);
  };

  useEffect(() => {
    var divDimensions = divRef.current.getBoundingClientRect();
    var divAbsoluteTop = divDimensions.top + window.scrollY;
    var startScale = 0;
    // var endScale = windowHeight / 2;
    var endScale = windowHeight;
    divRef.current.dataset.top = divAbsoluteTop;
    divRef.current.dataset.start = startScale;
    divRef.current.dataset.end = endScale;

    setTimeout(function () {
      const animationFrame = requestAnimationFrame(perspective);

      if (ResponsiveManager.isWindowLarger("md")) {
        window.addEventListener("scroll", scrollStarted);
      }

      return () => {
        cancelAnimationFrame(animationFrame);

        if (ResponsiveManager.isWindowLarger("md")) {
          window.removeEventListener("scroll", scrollStarted);
        }
      };
    }, 1000);
  }, []);

  return (
    <section className="landing" ref={divRef}>
      <Halo></Halo>
      <div className="wrapper">
        <div className="landing__fade" ref={divFadeOut}>
          <h1>
            {/* <span>
              <span>The open</span>
            </span>
            <span>
              <span>Knowledge protocol</span>
            </span> */}
            <span className="title-wrap">
              <span>The</span>
            </span>
            <span className="title-wrap">
              <span>open</span>
            </span>
            <br />
            <span className="title-wrap">
              <span>Knowledge</span>
            </span>
            <span className="title-wrap">
              <span>protocol</span>
            </span>
          </h1>
          <p className="subtitle">
            <span>
              OKP4 is an ever-expanding universe of applications powered by
              shared digital resources.
            </span>
          </p>
        </div>
        <div className="landing__illus" ref={divFadeIn}>
          {/* // Base Image used for dimensions (hidden opacity 0) */}
          <StaticImage
            className="imgWrapper--base"
            src="../../../assets/images/illus/index_landing.png"
            alt="OKP4 hero image"
          />
          <div className="landing__illus__wrapper">
            <StaticImage
              className="imgWrapper--base"
              src="../../../assets/images/illus/index_landing.png"
              alt="OKP4 hero image"
            />
            {/* // Socle en bois */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-400"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/1.png"
                alt="OKP4 hero image"
              />
            </div>

            {/* Glow lumière */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-420"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/2.png"
                alt="OKP4 hero image"
              />
            </div>

            {/* Téléphone */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-400"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/3.png"
                alt="OKP4 hero image"
              />
            </div>

            {/* Computation */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-300"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/5.png"
                alt="OKP4 hero image"
              />
            </div>

            {/* Identity */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-320"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/7.png"
                alt="OKP4 hero image"
              />
            </div>

            {/* Workflow engine */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-300"
            >
              <StaticImage
                data-parallax="1"
                data-parallaxend="-290"
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/9.png"
                alt="OKP4 hero image"
              />
            </div>

            {/* Data */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-270"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/6.png"
                alt="OKP4 hero image"
              />
            </div>

            {/* Storage */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-400"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/8.png"
                alt="OKP4 hero image"
              />
            </div>

            {/* Algorithm */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-320"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/4.png"
                alt="OKP4 hero image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
