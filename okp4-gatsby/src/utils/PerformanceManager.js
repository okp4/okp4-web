export function monitorInfiniteAnimations() {
  var intersectionAppear;
  var els = document.querySelectorAll("[data-infinite]");
  var optionsAppear = {
    root: null,
    rootMargin: "0px",
    threshold: 0.02,
  };

  if (els) {
    intersectionAppear = new IntersectionObserver(
      handleInfiniteAnimations.bind(this),
      optionsAppear
    );
    els.forEach((el) => {
      intersectionAppear.observe(el);
    });
  }
}

export function handleInfiniteAnimations(entries, intersectionAppear) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains("is-in-view")) {
        entry.target.classList.add("is-in-view");
        // if (entry.target.dataset.revealCustom || entry.target.dataset.reveal) {
        //   this.intersectionAppear.unobserve(entry.target);
        // }
      }
    } else {
      if (entry.target.classList.contains("is-in-view")) {
        entry.target.classList.remove("is-in-view");
      }
    }
  });
}

// export function callbackWhenInView(elem, callback) {
//    var intersectionAppear;
//    var optionsAppear = {
//      root: null,
//      rootMargin: "0px",
//      threshold: 0,
//    };
//    intersectionAppear = new IntersectionObserver(appearInViewBasic, optionsAppear);
//    intersectionAppear.observe(elem);
// }

// export function appearInViewBasic(entries, intersectionAppear){
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("Iam launching youtube video");
//         entry.target.setAttribute("src", divRef.current.dataset.src);
//         intersectionAppear.unobserve(entry.target);
//       }
//     });
//   };
