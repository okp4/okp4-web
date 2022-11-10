import ScrollManager from '../utils/scroll-manager';
// import {sleep} from '../utils/utils';

export default class PageHome {
  static init() {
    this.initHoverLanding();
    this.initParallaxLanding();
    this.initStickyUniverse();
    this.initRoadmap();

    this.defaultScrollY = window.scrollY;
    this.scrollMonitor = setInterval(this.scrollStarted.bind(this), 300);
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
    // this.landingParallax = document.querySelector('section.landing .bg__illus');
    this.landingParallax = document.querySelectorAll('[data-parallax-landing]');
    this.parallaxLanding();
  }

  static parallaxLanding() {

    this.landingParallax.forEach(el => {
      if (ScrollManager.isIntersectingViewport(el)) {
        // console.log(el.dataset);
        const initial = 0;
        const final = el.dataset.parallaxEnd;
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        let ratio;
        if (el.dataset.parallaxAlready == "1") ratio = ScrollManager.getIntersectionRatio(el, windowHeight);
        else ratio = ScrollManager.getIntersectionRatio(el);

        let transformRatio = ratio.toFixed(4)*final;
        let transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
        el.style.transform = transformRatioCss;
      }
    });

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

  static initRoadmap() {
    this.roadmapItems = document.querySelectorAll('.roadmap__item');
    this.roadmapInit = false;
    this.roadmapCurrent = 0;
    this.roadmapItems.forEach((el, index) => {
      let newIndex = index+1;
      let height = el.offsetHeight + 50;
      let heightCss = height + "px";
      let selectorCss = "--roadmap-item" + newIndex;
      document.documentElement.style.setProperty(selectorCss, heightCss);
      // if (index != 0) el.classList.remove('is-active');
      el.classList.remove('is-active');

      el.addEventListener('click', (event) => {
        if (!el.classList.contains('is-active')){
          setTimeout(function(){
            el.classList.remove('is-coming');
          }, 100);
          this.roadmapItems.forEach((el, index) => {
            el.classList.remove('is-active');
          });
        }
        el.classList.toggle('is-active');
      });
    });

    this.roadmapAutoLaunch();
  }

  static async roadmapAutoLaunch(){
    this.roadmapInterval;
    this.roadmapBlock = false;
    this.roadmapInterval = setInterval(()=> {
      if (!this.roadmapBlock){
        if (!this.roadmapInit){
          var firstItem = this.roadmapItems[this.roadmapCurrent];
          if (ScrollManager.isIntersectingViewport(firstItem)) {
            let ratio = ScrollManager.getIntersectionRatio(firstItem);
            if (ratio > 0.5) {
              firstItem.classList.add('is-active');
              this.roadmapInit = true;
              this.roadmapCurrent++;
              
              this.roadmapBlock = true;
              setTimeout(()=> {
                clearInterval(this.roadmapInterval);
                this.roadmapBlock = false;
              }, 1300);
            }
          }
        }

        // else {
        //   var currentItem = this.roadmapItems[this.roadmapCurrent];
        //   if (ScrollManager.isIntersectingViewport(currentItem)) {
        //     let ratio = ScrollManager.getIntersectionRatio(currentItem);
        //     if (ratio > 0.1) {
        //       setTimeout(function(){
        //         currentItem.classList.remove('is-coming');
        //       }, 100);
        //       this.roadmapItems.forEach((el, index) => {
        //         el.classList.remove('is-active');
        //       });
        //       currentItem.classList.add('is-active');
        //       this.roadmapCurrent++;
        //       this.roadmapBlock = true;
        //       setTimeout(()=> {
        //         this.roadmapBlock = false;
        //       }, 1300);
        //       if (this.roadmapCurrent >= this.roadmapItems.length){
        //         clearInterval(this.roadmapInterval);
        //       }
        //     }
        //   }
        // }
      }
    }, 200);

    // window.requestAnimationFrame(this.roadmapAutoLaunch.bind(this));
  }

  static scrollStarted(){
    if (window.scrollY > 30 && this.defaultScrollY != window.scrollY) {
      clearInterval(this.scrollMonitor);
      document.querySelector('.landing__bottom').classList.add('scrollStarted');
    }
  }
}
