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
      }
    } else {
      if (entry.target.classList.contains("is-in-view")) {
        entry.target.classList.remove("is-in-view");
      }
    }
  });
}
