export function isIntersectingViewport(elem) {
  const rect = elem.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  if (rect.top < windowHeight && rect.top > -rect.height) return true;
  else return false;
}

export function getIntersectionRatio(elem) {
  const rect = elem.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const distance = rect.height + windowHeight;
  const percentTravelled = (distance - rect.bottom) / distance;

  return percentTravelled;
}

export function getScaleRatio({ startScale, endScale }) {
  let distance = endScale - startScale;
  let parcouru = window.scrollY - startScale;
  let ratio = 1 - (distance - parcouru) / distance;
  return ratio;
}

export function disableScroll() {
  document.body.classList.add("scroll-disabled");
}

export function enableScroll() {
  document.body.classList.remove("scroll-disabled");
}
