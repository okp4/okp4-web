import React, { useEffect, useRef } from "react";
import Halo from "../../animations/Halo.js";
import { StaticImage } from "gatsby-plugin-image";

const Landing = () => {
  const divRef = useRef(null);
  const divFadeOut = useRef(null);
  const divFadeIn = useRef(null);
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const scrollStarted = () => {
    if (window.scrollY > 1) {
      divRef.current.classList.add("is-active");
    } else {
      divRef.current.classList.remove("is-active");
    }
  };

  const isIntersectingViewport = (elem) => {
    const rect = elem.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    if (rect.top < windowHeight && rect.top > -rect.height) return true;
    else return false;
  };

  const getIntersectionRatio = (elem) => {
    const rect = elem.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const distance = rect.height + windowHeight;
    const percentTravelled = (distance - rect.bottom) / distance;

    return percentTravelled;
  };

  const getScaleRatio = ({ startScale, endScale }) => {
    let distance = endScale - startScale;
    let parcouru = window.scrollY - startScale;
    let ratio = 1 - (distance - parcouru) / distance;
    return ratio;
  };

  const perspective = () => {
    let startScale = divRef.current.dataset.start;
    let endScale = divRef.current.dataset.end;

    if (window.scrollY >= startScale && window.scrollY <= endScale) {
      let ratio = getScaleRatio({ startScale, endScale });

      let scaleRatio = (1 - ratio / 5).toFixed(4);
      let scaleCss =
        "scale3d(" + scaleRatio + "," + scaleRatio + "," + scaleRatio + ")";
      divFadeOut.current.style.transform = scaleCss;

      let opacityRatioOut = (1 - ratio).toFixed(4);
      divFadeOut.current.style.opacity = opacityRatioOut;
    }

    divRef.current.querySelectorAll("[data-parallax]").forEach((elem) => {
      if (isIntersectingViewport(elem)) {
        var ratio = getIntersectionRatio(elem);
        var transformRatio;
        var parallaxEnd = parseInt(elem.dataset.parallaxend);
        transformRatio = ratio.toFixed(4) * parallaxEnd;

        var transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
        elem.style.transform = transformRatioCss;
      }
    });

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
      window.addEventListener("scroll", scrollStarted);

      return () => {
        cancelAnimationFrame(animationFrame);
        window.removeEventListener("scroll", scrollStarted);
      };
    }, 1000);
  }, []);

  return (
    <section className="landing" ref={divRef}>
      <Halo></Halo>
      <div className="wrapper">
        <div className="landing__fade" ref={divFadeOut}>
          <h1>
            The open
            <br />
            Knowledge protocol
          </h1>
          <p className="subtitle">
            OKP4 is an ever-expanding universe of applications powered by shared
            digital resources.
          </p>
        </div>
        <div className="landing__illus" ref={divFadeIn}>
          {/* // Base Image used for dimensions (hidden opacity 0) */}
          <StaticImage
            className="imgWrapper--base"
            src="../../../assets/images/illus/index_landing.png"
            alt="OKP4 hero image"
          />

          {/* // Socle en bois */}
          <div
            className="parallaxWrapper"
            data-parallax="1"
            data-parallaxend="200"
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
            data-parallaxend="180"
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
            data-parallaxend="100"
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
            data-parallaxend="-100"
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
            data-parallaxend="-100"
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
              data-parallaxend="-90"
              className="imgWrapper"
              src="../../../assets/images/illus/index_landing_sprites/9.png"
              alt="OKP4 hero image"
            />
          </div>

          {/* Data */}
          <div
            className="parallaxWrapper"
            data-parallax="1"
            data-parallaxend="-120"
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
            data-parallaxend="-200"
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
            data-parallaxend="-10"
          >
            <StaticImage
              className="imgWrapper"
              src="../../../assets/images/illus/index_landing_sprites/4.png"
              alt="OKP4 hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
