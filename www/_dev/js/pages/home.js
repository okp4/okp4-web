import ScrollManager from '../utils/scroll-manager';

export default class PageHome {
  static init() {
    this.initHoverLanding();
    this.initParallaxLanding();
    this.initStickyUniverse();
  }

  static initHoverLanding() {
    this.landing = document.querySelector('section.landing');
    this.haloLandingContainer = this.landing.querySelector('.hoverLanding');
    this.haloLanding = this.landing.querySelector('.hoverLanding .haloLanding');

    if (this.landing) {
      this.landing.addEventListener('mouseenter', ev => {
        this.hoverLanding(event, 'enter');
      });

      this.landing.addEventListener('mouseleave', ev => {
        this.hoverLanding(event, 'leave');
      });

      this.landing.addEventListener('mousemove', ev => {
        this.hoverLanding(event, 'move');
      });
    }
  }

  static hoverLanding(event, type) {
    if (type == 'enter') {
      this.haloLandingContainer.classList.add('is-active');
    }

    if (type == 'leave') {
      this.haloLandingContainer.classList.remove('is-active');
    }

    if (type == 'move') {
      setTimeout(() => {
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        let transformCss = 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0)';
        this.haloLanding.style.transform = transformCss;
      }, 100);
    }
  }

  static initParallaxLanding() {
    this.landingParallax = document.querySelector('section.landing .bg__illus');
    this.parallaxLanding();
  }

  static parallaxLanding() {

    if (ScrollManager.isIntersectingViewport(this.landingParallax)) {

      const initial = 0;
      const final = 220;
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      let ratio = ScrollManager.getIntersectionRatio(this.landingParallax, windowHeight);
      let transformRatio = ratio.toFixed(4)*final;
      let transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
      this.landingParallax.style.transform = transformRatioCss;
    }

    window.requestAnimationFrame(this.initParallaxLanding.bind(this));
  }

  static initStickyUniverse() {
    this.universeSection = document.querySelector('section.universe');
    const rect = this.universeSection.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    let topPositionSticky = -(rect.height - windowHeight) - 250;
    let topPositionCss = topPositionSticky + "px";
    this.universeSection.style.top = topPositionCss;
  }
}
