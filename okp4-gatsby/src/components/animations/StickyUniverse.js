import React, { useEffect, useRef } from "react";
import * as ResponsiveManager from "../../utils/ResponsiveManager.js";

const StickyUniverse = ({ children, classContainer }) => {
  const divRef = useRef(null);

  const monitorSection = () => {
    var intersectionAppear;
    var optionsAppear = {
      root: null,
      rootMargin: "50px",
      threshold: 0,
    };
    intersectionAppear = new IntersectionObserver(appearSection, optionsAppear);
    intersectionAppear.observe(divRef.current);
  };

  const appearSection = (entries, intersectionAppear) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    });
  };

  const setIllusMobile = () => {
    const illustrations = divRef.current.querySelectorAll(
      ".universe__illus__item"
    );
    illustrations.forEach((illus) => {
      let item_selector =
        "div.universe__item[data-item='" + illus.dataset.item + "']";
      let item = divRef.current.querySelector(item_selector);
      item.append(illus);
    });
  };

  const handleScroll = () => {
    var firstActive = divRef.current.querySelector(
      ".universe__item.is-first-active"
    );

    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const halfScreen = windowHeight / 2;
    if (firstActive) {
      const rect = firstActive.getBoundingClientRect();
      if (rect.top < halfScreen) {
        firstActive.classList.remove("is-first-active");
        firstActive.classList.add("is-active");
        let illusSelector =
          ".universe__illus__item[data-item='" +
          firstActive.dataset.item +
          "']";
        divRef.current.querySelector(illusSelector).classList.add("is-active");
        divRef.current
          .querySelector(illusSelector)
          .classList.remove("is-first-active");
      }
    } else {
      const universeItems = divRef.current.querySelectorAll(".universe__item");
      universeItems.forEach((item) => {
        if (item.classList.contains("is-active")) return;
        let rect = item.getBoundingClientRect();

        if (rect.top < halfScreen && rect.top > halfScreen - 100) {
          universeItems.forEach((oldItem) => {
            if (oldItem.classList.contains("is-active")) {
              oldItem.classList.remove("is-active");
              let oldIllusSelector =
                ".universe__illus__item[data-item='" +
                oldItem.dataset.item +
                "']";
              divRef.current
                .querySelector(oldIllusSelector)
                .classList.remove("is-active");
            }
          });

          item.classList.add("is-active");
          let illusSelector =
            ".universe__illus__item[data-item='" + item.dataset.item + "']";
          divRef.current
            .querySelector(illusSelector)
            .classList.add("is-active");
        }
      });
    }
  };

  useEffect(() => {
    if (ResponsiveManager.isWindowSmaller("md")) {
      setIllusMobile();
    }
    monitorSection();
  });

  return (
    <div className={classContainer} ref={divRef}>
      {children}
    </div>
  );
};

export default StickyUniverse;
