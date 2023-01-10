import React, { useEffect, useRef } from "react";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";
import * as ScrollManager from "../../../utils/ScrollManager.js";
import * as ResponsiveManager from "../../../utils/ResponsiveManager.js";

const Landing = () => {
  const divRef = useRef(null);
  const divFadeOut = useRef(null);
  const divFadeIn = useRef(null);
  var rafId = 0;

  const monitorSection = () => {
    var intersectionAppear;
    var optionsAppear = {
      root: null,
      rootMargin: "30px",
      threshold: 0,
    };
    intersectionAppear = new IntersectionObserver(appearSection, optionsAppear);
    intersectionAppear.observe(divRef.current);
  };

  const appearSection = (entries, intersectionAppear) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        rafId = requestAnimationFrame(perspective);

        if (ResponsiveManager.isWindowLarger("md")) {
          window.addEventListener("scroll", scrollStarted);
        }
      } else {
        cancelAnimationFrame(rafId);

        if (ResponsiveManager.isWindowLarger("md")) {
          window.removeEventListener("scroll", scrollStarted);
        }
      }
    });
  };

  const scrollStarted = () => {
    if (window.scrollY < 410) {
      const scrollY = window.scrollY;
      const distance = 400;
      let percentTravelled = scrollY / distance;
      if (percentTravelled > 1) percentTravelled = 1;

      if (percentTravelled < 0.1) percentTravelled = 0.1;
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

      let opacityRatioOut = (1 - ratio * 2).toFixed(4);
      divFadeOut.current.style.opacity = opacityRatioOut;
    }

    // if (ResponsiveManager.isWindowLarger("md")) {
    divRef.current.querySelectorAll("[data-parallax]").forEach((elem) => {
      if (ScrollManager.isIntersectingViewport(divFadeIn.current)) {
        var ratio = ScrollManager.getIntersectionRatio(divFadeIn.current);
        var transformRatio;
        var parallaxEnd = parseInt(elem.dataset.parallaxend);

        if (ResponsiveManager.isWindowSmaller("md")) {
          // parallaxEnd = parallaxEnd / 1.5;
          parallaxEnd = parallaxEnd;
          const scrollY = window.scrollY;
          const distance = 1000;
          ratio = scrollY / distance;
          if (ratio > 1) ratio = 1;
        }

        transformRatio = (ratio.toFixed(4) * parallaxEnd).toFixed(4);

        var transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
        elem.style.transform = transformRatioCss;
      }
    });
    // }

    rafId = requestAnimationFrame(perspective);
  };

  useEffect(() => {
    var divDimensions = divRef.current.getBoundingClientRect();
    var divAbsoluteTop = divDimensions.top + window.scrollY;
    var startScale = 0;
    // var endScale = windowHeight / 2;

    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    var endScale = windowHeight;
    divRef.current.dataset.top = divAbsoluteTop;
    divRef.current.dataset.start = startScale;
    divRef.current.dataset.end = endScale;
    divRef.current.dataset.raf = 0;

    setTimeout(function () {
      monitorSection();
    }, 1000);
  }, []);

  return (
    <section className="landing" ref={divRef}>
      <Halo></Halo>
      <div className="wrapper">
        <div className="landing__fade" ref={divFadeOut}>
          <h1>
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
            src="../../../assets/images/illus/index_landing.jpg"
            alt="OKP4 hero image"
            load="eager"
          />
          <div className="landing__illus__wrapper">
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
                load="eager"
              />
            </div>

            {/* Glow lumière */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              data-parallaxend="-400"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/2.png"
                alt="OKP4 hero image"
                load="eager"
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
                load="eager"
              />
            </div>

            {/* Computation */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              // data-parallaxend="-300"
              data-parallaxend="-430"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/5.png"
                alt="OKP4 hero image"
                load="eager"
              />
            </div>

            {/* Workflow engine */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              // data-parallaxend="-210"
              data-parallaxend="-390"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/9.png"
                alt="OKP4 hero image"
                load="eager"
              />
            </div>

            {/* Identity */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              // data-parallaxend="-320"
              data-parallaxend="-360"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/7.png"
                alt="OKP4 hero image"
                load="eager"
              />
            </div>

            {/* Storage */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              // data-parallaxend="-400"
              data-parallaxend="-430"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/8.png"
                alt="OKP4 hero image"
                load="eager"
              />
            </div>

            {/* Data */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              // data-parallaxend="-270"
              data-parallaxend="-390"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/6.png"
                alt="OKP4 hero image"
                load="eager"
              />
            </div>

            {/* Algorithm */}
            <div
              className="parallaxWrapper"
              data-parallax="1"
              // data-parallaxend="-320"
              data-parallaxend="-360"
            >
              <StaticImage
                className="imgWrapper"
                src="../../../assets/images/illus/index_landing_sprites/4.png"
                alt="OKP4 hero image"
                load="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
