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
      console.log("first active");
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

          console.log("I am in interval");
          item.classList.add("is-active");
          console.log(item);
          let illusSelector =
            ".universe__illus__item[data-item='" + item.dataset.item + "']";
          divRef.current
            .querySelector(illusSelector)
            .classList.add("is-active");
        }
      });
      // const universeItems = divRef.current.querySelectorAll(".universe__item");
      // const currentItem = divRef.current.querySelector(
      //   ".universe__item.is-active"
      // );
      // let currentIllusSelector =
      //   ".universe__illus__item[data-item='" + currentItem.dataset.item + "']";
      // const currentKey = parseInt(currentItem.dataset.key);
      // const nextKey = currentKey + 1;
      // const item = universeItems[nextKey];

      // if (item) {
      //   const rect = item.getBoundingClientRect();
      //   if (rect.top < halfScreen) {
      //     currentItem.classList.remove("is-active");
      //     item.classList.add("is-active");
      //     let illusSelector =
      //       ".universe__illus__item[data-item='" + item.dataset.item + "']";

      //     divRef.current
      //       .querySelector(currentIllusSelector)
      //       .classList.remove("is-active");
      //     divRef.current
      //       .querySelector(illusSelector)
      //       .classList.add("is-active");
      //   }
      // }
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
