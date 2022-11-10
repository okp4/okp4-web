export default class ScrollManager {

  static getScrollPos() {
    return window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
      || 0;
  }

  static isInViewport(element, fractionVisible = 0) {
    if (fractionVisible > 1 || fractionVisible < 0) {
      throw new Error('Probleme de pourcentage');
    }
    const rect = element.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const margeY = fractionVisible * windowHeight;
    const margeX = fractionVisible * windowWidth;

    return (
      rect.top <= windowHeight - margeY
      && rect.left <= windowWidth - margeX
      && rect.bottom > margeY
      && rect.right > margeX
    );
  }

  static isIntersectingViewport(element) {

    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    
    if (rect.top < windowHeight && rect.top > -rect.height) return true;
    else return false;
  }

  static getIntersectionRatio(element, removeHeight = false) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    let distance = rect.height + windowHeight;
    if (removeHeight) distance = rect.height + windowHeight - removeHeight;
    
    const percentTravelled = (distance - rect.bottom) / distance;
    return percentTravelled;
  }
}
