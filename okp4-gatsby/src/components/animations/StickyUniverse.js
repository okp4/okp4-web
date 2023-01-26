import React, { useEffect, useRef } from "react";
import * as ResponsiveManager from "../../utils/ResponsiveManager.js";

const StickyUniverse = ({ children, classContainer }) => {
  const divRef = useRef(null);
  var scrollPos = 0;
  var scrollDirection = "down";

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

  const handleScroll = (event) => {
    if (document.body.getBoundingClientRect().top > scrollPos) {
      scrollDirection = "up";
    } else {
      scrollDirection = "down";
    }
    scrollPos = document.body.getBoundingClientRect().top;

    var firstActive = divRef.current.querySelector(
      ".universe__item.is-first-active"
    );

    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const halfScreen = windowHeight * (3 / 5);
    let targetScroll = halfScreen;
    if (scrollDirection === "up") targetScroll = windowHeight * (2 / 5);
    if (firstActive) {
      const rect = firstActive.getBoundingClientRect();
      if (rect.top < targetScroll) {
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

        if (rect.top < targetScroll && rect.top > targetScroll - 100) {
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
    if (ResponsiveManager.isWindowSmaller("lg")) {
      setIllusMobile();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={classContainer} ref={divRef}>
      {children}
    </div>
  );
};

export default StickyUniverse;
