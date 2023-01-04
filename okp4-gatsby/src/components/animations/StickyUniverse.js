import React, { useEffect, useRef } from "react";

const StickyUniverse = ({ children, classContainer }) => {
  const divRef = useRef(null);
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const halfScreen = windowHeight / 2;

  const handleScroll = () => {
    var firstActive = divRef.current.querySelector(
      ".universe__item.is-first-active"
    );

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

        if (rect.top < halfScreen + 100 && rect.top > halfScreen) {
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classContainer} ref={divRef}>
      {children}
    </div>
  );
};

export default StickyUniverse;
