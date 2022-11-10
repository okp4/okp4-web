import ScrollManager from '../utils/scroll-manager';

export default class ParallaxManager {
  static init() {
    this.handleParallax();
  }

  static handleParallax(){
    this.elemsParallax = document.querySelectorAll('[data-parallax]');
    this.elemsParallax.forEach(el => {
      if (ScrollManager.isIntersectingViewport(el)) {
        const final = el.dataset.parallax;
        let ratio = ScrollManager.getIntersectionRatio(el);
        let transformRatio = ratio.toFixed(4)*final;
        let transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
        el.style.transform = transformRatioCss;
      }
    });

    window.requestAnimationFrame(this.handleParallax.bind(this));
  }

}
