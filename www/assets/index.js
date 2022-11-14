/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/animations/appear-manager.js":
/*!*****************************************!*\
  !*** ./js/animations/appear-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppearManager)
/* harmony export */ });
class AppearManager {

  static init() {
    this.initReveal();
  }

  static initReveal(){
    this.intersectionAppear;
    this.intersectionInfinite;
    this.optionsAppear = {
      root: null,
      rootMargin: "0px",
      threshold: this.buildThresholdListAnims(10000)
    };
    this.optionsInfinite = {
      root: null,
      rootMargin: "0px",
      threshold: this.buildThresholdListAnims(1)
    };
    this.createIntersectionObs();
  }

  static createIntersectionObs(){
    var els = document.querySelectorAll('[data-reveal]:not(.is-in-view)');
    var els_custom = document.querySelectorAll('[data-reveal-custom]:not(.is-in-view)');
    var els_infinite = document.querySelectorAll('[data-inifinite-animation]');

    if (els || els_custom){
      this.intersectionAppear = new IntersectionObserver(this.handleAppear.bind(this), this.optionsAppear);
    }

    if (els_infinite){
      this.intersectionInfinite = new IntersectionObserver(this.handleInfinite.bind(this), this.optionsInfinite);
    }

    if (els){
      els.forEach(el => {
        this.intersectionAppear.observe(el);
      });
    }

    if (els_custom){
      els_custom.forEach(el => {
        this.intersectionAppear.observe(el);
      });
    }

    if (els_infinite){
      els_infinite.forEach(el => {
        this.intersectionInfinite.observe(el);
      });
    }
  }

  static handleAppear(entries, intersectionAppear) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains('is-in-view')) {
          entry.target.classList.add('is-in-view');
          if (entry.target.dataset.revealCustom || entry.target.dataset.reveal){
            this.intersectionAppear.unobserve(entry.target);
          }
        }
      }
    });
  }

  static handleInfinite(entries, intersectionAppear) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains('is-in-view')) {
          entry.target.classList.add('is-in-view');
        }
      }
      else {
        entry.target.classList.remove('is-in-view');
      }
    });
  }

  static buildThresholdListAnims(numSteps) {
    var thresholds = [];

    for (var i=1.0; i<=numSteps; i++) {
      var ratio = i/numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

}


/***/ }),

/***/ "./js/animations/header-manager.js":
/*!*****************************************!*\
  !*** ./js/animations/header-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderManager)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./js/utils/utils.js");


class HeaderManager {
  static init() {
    if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isWindowSmaller)('lg')) {
      this.header = document.querySelector('header.mainHeader');
      this.headerToggler = this.header.querySelector('.burger');
      this.headerToggler.addEventListener('click', (event) => {
        this.header.classList.toggle('is-active');
      });
    }
  }
}


/***/ }),

/***/ "./js/animations/parallax-manager.js":
/*!*******************************************!*\
  !*** ./js/animations/parallax-manager.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParallaxManager)
/* harmony export */ });
/* harmony import */ var _utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scroll-manager */ "./js/utils/scroll-manager.js");


class ParallaxManager {
  static init() {
    this.elemsParallax = document.querySelectorAll('[data-parallax]');
    this.rafs = [];
    this.handleParallax();
  }

  static handleParallax(){
    this.elemsParallax.forEach((el, index) => {
      // console.log(index);
      // el.dataset.parallaxId = index;
      // console.log(el.dataset);
      // console.log(el.dataset.parallaxId);
      if (_utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].isIntersectingViewport(el)) {
        const final = el.dataset.parallax;
        let ratio = _utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getIntersectionRatio(el);
        let transformRatio = ratio.toFixed(4)*final;
        let transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
        el.style.transform = transformRatioCss;
      }
    });

    window.requestAnimationFrame(this.handleParallax.bind(this));
  }

  // static parallaxItem(el){
  //   if (ScrollManager.isIntersectingViewport(el)) {
  //     const final = el.dataset.parallax;
  //     let ratio = ScrollManager.getIntersectionRatio(el);
  //     let transformRatio = ratio.toFixed(4)*final;
  //     let transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
  //     el.style.transform = transformRatioCss;
  //   }
  // }

}


/***/ }),

/***/ "./js/pages/home.js":
/*!**************************!*\
  !*** ./js/pages/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageHome)
/* harmony export */ });
/* harmony import */ var _utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scroll-manager */ "./js/utils/scroll-manager.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./js/utils/utils.js");



class PageHome {
  static init() {
    this.initRoadmap();

    if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isWindowLarger)('lg')) {
      this.initStickyUniverse();
      this.initHoverLanding();
      this.initParallaxLanding();
      this.defaultScrollY = window.scrollY;
      this.scrollMonitor = setInterval(this.scrollStarted.bind(this), 300);
    }
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
      if (_utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].isIntersectingViewport(el)) {
        // console.log(el.dataset);
        const initial = 0;
        const final = el.dataset.parallaxEnd;
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        let ratio;
        if (el.dataset.parallaxAlready == "1") ratio = _utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getIntersectionRatio(el, windowHeight);
        else ratio = _utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getIntersectionRatio(el);

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
      let height = el.querySelector('.roadmap__item-container').offsetHeight + 150;
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
          if (_utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].isIntersectingViewport(firstItem)) {
            let ratio = _utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getIntersectionRatio(firstItem);
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


/***/ }),

/***/ "./js/utils/scroll-manager.js":
/*!************************************!*\
  !*** ./js/utils/scroll-manager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollManager)
/* harmony export */ });
class ScrollManager {

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


/***/ }),

/***/ "./js/utils/utils.js":
/*!***************************!*\
  !*** ./js/utils/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakpoints": () => (/* binding */ breakpoints),
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "getCurrentBreakpoint": () => (/* binding */ getCurrentBreakpoint),
/* harmony export */   "initBreakpointsFromCSS": () => (/* binding */ initBreakpointsFromCSS),
/* harmony export */   "isWindowLarger": () => (/* binding */ isWindowLarger),
/* harmony export */   "isWindowSmaller": () => (/* binding */ isWindowSmaller),
/* harmony export */   "ready": () => (/* binding */ ready),
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "sleep": () => (/* binding */ sleep)
/* harmony export */ });
function ready() {
  return new Promise((resolve) => {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
      resolve();
    } else {
      document.addEventListener('DOMContentLoaded', (event) => resolve(event));
    }
  });
}
let breakpointsValue;

function initBreakpointsFromCSS() {
  if (!breakpointsValue) {
    breakpointsValue = {};
    const cssBreakpoints = window.getComputedStyle(document.body).getPropertyValue('--breakpoints');
    cssBreakpoints.split(',').forEach((cssBreakpoint) => {
      if (cssBreakpoint.length > 0) {
        if (cssBreakpoint[0] === ' ') {
          cssBreakpoint = cssBreakpoint.substr(1);
        }
        const breakpointInfos = cssBreakpoint.split(' ');
        breakpointsValue[breakpointInfos[0]] = parseInt(breakpointInfos[1], 10);
      }
    });
  }
}

function breakpoints() {
  initBreakpointsFromCSS();
  return breakpointsValue;
}

function isWindowLarger(breakpoint) {
  const breakpointValue = breakpoints()[breakpoint];

  if (!breakpointValue) {
    console.error('No corresponding breakpoint', breakpoint);
    return false;
  }

  return window.innerWidth >= breakpointValue;
}

function isWindowSmaller(breakpoint) {
  const breakpointValue = breakpoints()[breakpoint];

  if (!breakpointValue) {
    console.error('No corresponding breakpoint', breakpoint);
    return false;
  }

  return window.innerWidth < breakpointValue;
}

function getCurrentBreakpoint() {
  const currentBreakpoints = breakpoints();
  let currentBreakpoint;

  Object.keys(currentBreakpoints).forEach((breakpoint) => {
    if (window.innerWidth > currentBreakpoints[breakpoint]) {
      currentBreakpoint = breakpoint;
    }
  });

  return currentBreakpoint;
}

/**
* Create a cookie
*/
function setCookie(cookieName, cookieValue, durationInDay) {
  const today = new Date();
  const expires = new Date();
  expires.setTime(today.getTime() + (durationInDay * 24 * 60 * 60 * 1000));
  document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)};expires=${expires.toGMTString()};path=/;`;
}
/**
* Check if a cookie exists, if yes return its value
*/
function getCookie(cookieName) {
  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./js/utils/utils.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./js/pages/home.js");
/* harmony import */ var _animations_appear_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/appear-manager */ "./js/animations/appear-manager.js");
/* harmony import */ var _animations_parallax_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/parallax-manager */ "./js/animations/parallax-manager.js");
/* harmony import */ var _animations_header_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/header-manager */ "./js/animations/header-manager.js");






(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.ready)().then(() => {
  _animations_appear_manager__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  _animations_parallax_manager__WEBPACK_IMPORTED_MODULE_3__["default"].init();
  _animations_header_manager__WEBPACK_IMPORTED_MODULE_4__["default"].init();
  _pages_home__WEBPACK_IMPORTED_MODULE_1__["default"].init();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDQTtBQUNvQjtBQUNJO0FBQ0o7O0FBRXhELG1EQUFLO0FBQ0wsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx5RUFBb0I7QUFDdEIsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx3REFBYTtBQUNmLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29rcDQvLi9qcy9hbmltYXRpb25zL2FwcGVhci1tYW5hZ2VyLmpzIiwid2VicGFjazovL29rcDQvLi9qcy9hbmltYXRpb25zL2hlYWRlci1tYW5hZ2VyLmpzIiwid2VicGFjazovL29rcDQvLi9qcy9hbmltYXRpb25zL3BhcmFsbGF4LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb2twNC8uL2pzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2twNC8uL2pzL3V0aWxzL3Njcm9sbC1tYW5hZ2VyLmpzIiwid2VicGFjazovL29rcDQvLi9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9va3A0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29rcDQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29rcDQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9va3A0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2twNC8uL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGVhck1hbmFnZXIge1xuXG4gIHN0YXRpYyBpbml0KCkge1xuICAgIHRoaXMuaW5pdFJldmVhbCgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRSZXZlYWwoKXtcbiAgICB0aGlzLmludGVyc2VjdGlvbkFwcGVhcjtcbiAgICB0aGlzLmludGVyc2VjdGlvbkluZmluaXRlO1xuICAgIHRoaXMub3B0aW9uc0FwcGVhciA9IHtcbiAgICAgIHJvb3Q6IG51bGwsXG4gICAgICByb290TWFyZ2luOiBcIjBweFwiLFxuICAgICAgdGhyZXNob2xkOiB0aGlzLmJ1aWxkVGhyZXNob2xkTGlzdEFuaW1zKDEwMDAwKVxuICAgIH07XG4gICAgdGhpcy5vcHRpb25zSW5maW5pdGUgPSB7XG4gICAgICByb290OiBudWxsLFxuICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcbiAgICAgIHRocmVzaG9sZDogdGhpcy5idWlsZFRocmVzaG9sZExpc3RBbmltcygxKVxuICAgIH07XG4gICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJbnRlcnNlY3Rpb25PYnMoKXtcbiAgICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcmV2ZWFsXTpub3QoLmlzLWluLXZpZXcpJyk7XG4gICAgdmFyIGVsc19jdXN0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXZlYWwtY3VzdG9tXTpub3QoLmlzLWluLXZpZXcpJyk7XG4gICAgdmFyIGVsc19pbmZpbml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluaWZpbml0ZS1hbmltYXRpb25dJyk7XG5cbiAgICBpZiAoZWxzIHx8IGVsc19jdXN0b20pe1xuICAgICAgdGhpcy5pbnRlcnNlY3Rpb25BcHBlYXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5oYW5kbGVBcHBlYXIuYmluZCh0aGlzKSwgdGhpcy5vcHRpb25zQXBwZWFyKTtcbiAgICB9XG5cbiAgICBpZiAoZWxzX2luZmluaXRlKXtcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW9uSW5maW5pdGUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5oYW5kbGVJbmZpbml0ZS5iaW5kKHRoaXMpLCB0aGlzLm9wdGlvbnNJbmZpbml0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGVscyl7XG4gICAgICBlbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uQXBwZWFyLm9ic2VydmUoZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGVsc19jdXN0b20pe1xuICAgICAgZWxzX2N1c3RvbS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25BcHBlYXIub2JzZXJ2ZShlbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZWxzX2luZmluaXRlKXtcbiAgICAgIGVsc19pbmZpbml0ZS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25JbmZpbml0ZS5vYnNlcnZlKGVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVBcHBlYXIoZW50cmllcywgaW50ZXJzZWN0aW9uQXBwZWFyKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBpZiAoIWVudHJ5LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWluLXZpZXcnKSkge1xuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1pbi12aWV3Jyk7XG4gICAgICAgICAgaWYgKGVudHJ5LnRhcmdldC5kYXRhc2V0LnJldmVhbEN1c3RvbSB8fCBlbnRyeS50YXJnZXQuZGF0YXNldC5yZXZlYWwpe1xuICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25BcHBlYXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlSW5maW5pdGUoZW50cmllcywgaW50ZXJzZWN0aW9uQXBwZWFyKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBpZiAoIWVudHJ5LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWluLXZpZXcnKSkge1xuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1pbi12aWV3Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW4tdmlldycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkVGhyZXNob2xkTGlzdEFuaW1zKG51bVN0ZXBzKSB7XG4gICAgdmFyIHRocmVzaG9sZHMgPSBbXTtcblxuICAgIGZvciAodmFyIGk9MS4wOyBpPD1udW1TdGVwczsgaSsrKSB7XG4gICAgICB2YXIgcmF0aW8gPSBpL251bVN0ZXBzO1xuICAgICAgdGhyZXNob2xkcy5wdXNoKHJhdGlvKTtcbiAgICB9XG5cbiAgICB0aHJlc2hvbGRzLnB1c2goMCk7XG4gICAgcmV0dXJuIHRocmVzaG9sZHM7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtpc1dpbmRvd1NtYWxsZXJ9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyTWFuYWdlciB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIGlmIChpc1dpbmRvd1NtYWxsZXIoJ2xnJykpIHtcbiAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyLm1haW5IZWFkZXInKTtcbiAgICAgIHRoaXMuaGVhZGVyVG9nZ2xlciA9IHRoaXMuaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcbiAgICAgIHRoaXMuaGVhZGVyVG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFNjcm9sbE1hbmFnZXIgZnJvbSAnLi4vdXRpbHMvc2Nyb2xsLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbGxheE1hbmFnZXIge1xuICBzdGF0aWMgaW5pdCgpIHtcbiAgICB0aGlzLmVsZW1zUGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYXJhbGxheF0nKTtcbiAgICB0aGlzLnJhZnMgPSBbXTtcbiAgICB0aGlzLmhhbmRsZVBhcmFsbGF4KCk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlUGFyYWxsYXgoKXtcbiAgICB0aGlzLmVsZW1zUGFyYWxsYXguZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAvLyBlbC5kYXRhc2V0LnBhcmFsbGF4SWQgPSBpbmRleDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsLmRhdGFzZXQpO1xuICAgICAgLy8gY29uc29sZS5sb2coZWwuZGF0YXNldC5wYXJhbGxheElkKTtcbiAgICAgIGlmIChTY3JvbGxNYW5hZ2VyLmlzSW50ZXJzZWN0aW5nVmlld3BvcnQoZWwpKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsID0gZWwuZGF0YXNldC5wYXJhbGxheDtcbiAgICAgICAgbGV0IHJhdGlvID0gU2Nyb2xsTWFuYWdlci5nZXRJbnRlcnNlY3Rpb25SYXRpbyhlbCk7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1SYXRpbyA9IHJhdGlvLnRvRml4ZWQoNCkqZmluYWw7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1SYXRpb0NzcyA9IFwidHJhbnNsYXRlM2QoMCwgXCIgKyB0cmFuc2Zvcm1SYXRpbyArIFwicHgsIDApXCI7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVJhdGlvQ3NzO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVBhcmFsbGF4LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLy8gc3RhdGljIHBhcmFsbGF4SXRlbShlbCl7XG4gIC8vICAgaWYgKFNjcm9sbE1hbmFnZXIuaXNJbnRlcnNlY3RpbmdWaWV3cG9ydChlbCkpIHtcbiAgLy8gICAgIGNvbnN0IGZpbmFsID0gZWwuZGF0YXNldC5wYXJhbGxheDtcbiAgLy8gICAgIGxldCByYXRpbyA9IFNjcm9sbE1hbmFnZXIuZ2V0SW50ZXJzZWN0aW9uUmF0aW8oZWwpO1xuICAvLyAgICAgbGV0IHRyYW5zZm9ybVJhdGlvID0gcmF0aW8udG9GaXhlZCg0KSpmaW5hbDtcbiAgLy8gICAgIGxldCB0cmFuc2Zvcm1SYXRpb0NzcyA9IFwidHJhbnNsYXRlM2QoMCwgXCIgKyB0cmFuc2Zvcm1SYXRpbyArIFwicHgsIDApXCI7XG4gIC8vICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1SYXRpb0NzcztcbiAgLy8gICB9XG4gIC8vIH1cblxufVxuIiwiaW1wb3J0IFNjcm9sbE1hbmFnZXIgZnJvbSAnLi4vdXRpbHMvc2Nyb2xsLW1hbmFnZXInO1xuaW1wb3J0IHtpc1dpbmRvd0xhcmdlcn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlSG9tZSB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIHRoaXMuaW5pdFJvYWRtYXAoKTtcblxuICAgIGlmIChpc1dpbmRvd0xhcmdlcignbGcnKSkge1xuICAgICAgdGhpcy5pbml0U3RpY2t5VW5pdmVyc2UoKTtcbiAgICAgIHRoaXMuaW5pdEhvdmVyTGFuZGluZygpO1xuICAgICAgdGhpcy5pbml0UGFyYWxsYXhMYW5kaW5nKCk7XG4gICAgICB0aGlzLmRlZmF1bHRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICB0aGlzLnNjcm9sbE1vbml0b3IgPSBzZXRJbnRlcnZhbCh0aGlzLnNjcm9sbFN0YXJ0ZWQuYmluZCh0aGlzKSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaW5pdEhvdmVyTGFuZGluZygpIHtcbiAgICB0aGlzLmxhbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmxhbmRpbmcnKTtcbiAgICB0aGlzLmhhbG9MYW5kaW5nQ29udGFpbmVyID0gdGhpcy5sYW5kaW5nLnF1ZXJ5U2VsZWN0b3IoJy5ob3ZlckxhbmRpbmcnKTtcbiAgICB0aGlzLmhhbG9MYW5kaW5nID0gdGhpcy5sYW5kaW5nLnF1ZXJ5U2VsZWN0b3IoJy5ob3ZlckxhbmRpbmcgLmhhbG9MYW5kaW5nJyk7XG5cbiAgICBpZiAodGhpcy5sYW5kaW5nKSB7XG4gICAgICB0aGlzLmxhbmRpbmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ID0+IHtcbiAgICAgICAgdGhpcy5ob3ZlckxhbmRpbmcoZXZlbnQsICdlbnRlcicpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubGFuZGluZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXYgPT4ge1xuICAgICAgICB0aGlzLmhvdmVyTGFuZGluZyhldmVudCwgJ2xlYXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sYW5kaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ID0+IHtcbiAgICAgICAgdGhpcy5ob3ZlckxhbmRpbmcoZXZlbnQsICdtb3ZlJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaG92ZXJMYW5kaW5nKGV2ZW50LCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5oYWxvTGFuZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSAnbGVhdmUnKSB7XG4gICAgICB0aGlzLmhhbG9MYW5kaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09ICdtb3ZlJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBtb3VzZVggPSBldmVudC5wYWdlWDtcbiAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICBsZXQgdHJhbnNmb3JtQ3NzID0gJ3RyYW5zbGF0ZTNkKCcgKyBtb3VzZVggKyAncHgsICcgKyBtb3VzZVkgKyAncHgsIDApJztcbiAgICAgICAgdGhpcy5oYWxvTGFuZGluZy5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1Dc3M7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbml0UGFyYWxsYXhMYW5kaW5nKCkge1xuICAgIC8vIHRoaXMubGFuZGluZ1BhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5sYW5kaW5nIC5iZ19faWxsdXMnKTtcbiAgICB0aGlzLmxhbmRpbmdQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhcmFsbGF4LWxhbmRpbmddJyk7XG4gICAgdGhpcy5wYXJhbGxheExhbmRpbmcoKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXJhbGxheExhbmRpbmcoKSB7XG5cbiAgICB0aGlzLmxhbmRpbmdQYXJhbGxheC5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChTY3JvbGxNYW5hZ2VyLmlzSW50ZXJzZWN0aW5nVmlld3BvcnQoZWwpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsLmRhdGFzZXQpO1xuICAgICAgICBjb25zdCBpbml0aWFsID0gMDtcbiAgICAgICAgY29uc3QgZmluYWwgPSBlbC5kYXRhc2V0LnBhcmFsbGF4RW5kO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgICBsZXQgcmF0aW87XG4gICAgICAgIGlmIChlbC5kYXRhc2V0LnBhcmFsbGF4QWxyZWFkeSA9PSBcIjFcIikgcmF0aW8gPSBTY3JvbGxNYW5hZ2VyLmdldEludGVyc2VjdGlvblJhdGlvKGVsLCB3aW5kb3dIZWlnaHQpO1xuICAgICAgICBlbHNlIHJhdGlvID0gU2Nyb2xsTWFuYWdlci5nZXRJbnRlcnNlY3Rpb25SYXRpbyhlbCk7XG5cbiAgICAgICAgbGV0IHRyYW5zZm9ybVJhdGlvID0gcmF0aW8udG9GaXhlZCg0KSpmaW5hbDtcbiAgICAgICAgbGV0IHRyYW5zZm9ybVJhdGlvQ3NzID0gXCJ0cmFuc2xhdGUzZCgwLCBcIiArIHRyYW5zZm9ybVJhdGlvICsgXCJweCwgMClcIjtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtUmF0aW9Dc3M7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaW5pdFBhcmFsbGF4TGFuZGluZy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0U3RpY2t5VW5pdmVyc2UoKSB7XG4gICAgdGhpcy51bml2ZXJzZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLnVuaXZlcnNlJyk7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMudW5pdmVyc2VTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgbGV0IHRvcFBvc2l0aW9uU3RpY2t5ID0gLShyZWN0LmhlaWdodCAtIHdpbmRvd0hlaWdodCkgLSAyNTA7XG4gICAgbGV0IHRvcFBvc2l0aW9uQ3NzID0gdG9wUG9zaXRpb25TdGlja3kgKyBcInB4XCI7XG4gICAgdGhpcy51bml2ZXJzZVNlY3Rpb24uc3R5bGUudG9wID0gdG9wUG9zaXRpb25Dc3M7XG4gIH1cblxuICBzdGF0aWMgaW5pdFJvYWRtYXAoKSB7XG4gICAgdGhpcy5yb2FkbWFwSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm9hZG1hcF9faXRlbScpO1xuICAgIHRoaXMucm9hZG1hcEluaXQgPSBmYWxzZTtcbiAgICB0aGlzLnJvYWRtYXBDdXJyZW50ID0gMDtcbiAgICB0aGlzLnJvYWRtYXBJdGVtcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBuZXdJbmRleCA9IGluZGV4KzE7XG4gICAgICBsZXQgaGVpZ2h0ID0gZWwucXVlcnlTZWxlY3RvcignLnJvYWRtYXBfX2l0ZW0tY29udGFpbmVyJykub2Zmc2V0SGVpZ2h0ICsgMTUwO1xuICAgICAgbGV0IGhlaWdodENzcyA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgIGxldCBzZWxlY3RvckNzcyA9IFwiLS1yb2FkbWFwLWl0ZW1cIiArIG5ld0luZGV4O1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHNlbGVjdG9yQ3NzLCBoZWlnaHRDc3MpO1xuICAgICAgLy8gaWYgKGluZGV4ICE9IDApIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSl7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtY29taW5nJyk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB0aGlzLnJvYWRtYXBJdGVtcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvYWRtYXBBdXRvTGF1bmNoKCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgcm9hZG1hcEF1dG9MYXVuY2goKXtcbiAgICB0aGlzLnJvYWRtYXBJbnRlcnZhbDtcbiAgICB0aGlzLnJvYWRtYXBCbG9jayA9IGZhbHNlO1xuICAgIHRoaXMucm9hZG1hcEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICBpZiAoIXRoaXMucm9hZG1hcEJsb2NrKXtcbiAgICAgICAgaWYgKCF0aGlzLnJvYWRtYXBJbml0KXtcbiAgICAgICAgICB2YXIgZmlyc3RJdGVtID0gdGhpcy5yb2FkbWFwSXRlbXNbdGhpcy5yb2FkbWFwQ3VycmVudF07XG4gICAgICAgICAgaWYgKFNjcm9sbE1hbmFnZXIuaXNJbnRlcnNlY3RpbmdWaWV3cG9ydChmaXJzdEl0ZW0pKSB7XG4gICAgICAgICAgICBsZXQgcmF0aW8gPSBTY3JvbGxNYW5hZ2VyLmdldEludGVyc2VjdGlvblJhdGlvKGZpcnN0SXRlbSk7XG4gICAgICAgICAgICBpZiAocmF0aW8gPiAwLjUpIHtcbiAgICAgICAgICAgICAgZmlyc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICB0aGlzLnJvYWRtYXBJbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5yb2FkbWFwQ3VycmVudCsrO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5yb2FkbWFwQmxvY2sgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yb2FkbWFwSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMucm9hZG1hcEJsb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0sIDEzMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgIHZhciBjdXJyZW50SXRlbSA9IHRoaXMucm9hZG1hcEl0ZW1zW3RoaXMucm9hZG1hcEN1cnJlbnRdO1xuICAgICAgICAvLyAgIGlmIChTY3JvbGxNYW5hZ2VyLmlzSW50ZXJzZWN0aW5nVmlld3BvcnQoY3VycmVudEl0ZW0pKSB7XG4gICAgICAgIC8vICAgICBsZXQgcmF0aW8gPSBTY3JvbGxNYW5hZ2VyLmdldEludGVyc2VjdGlvblJhdGlvKGN1cnJlbnRJdGVtKTtcbiAgICAgICAgLy8gICAgIGlmIChyYXRpbyA+IDAuMSkge1xuICAgICAgICAvLyAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICAgICAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtY29taW5nJyk7XG4gICAgICAgIC8vICAgICAgIH0sIDEwMCk7XG4gICAgICAgIC8vICAgICAgIHRoaXMucm9hZG1hcEl0ZW1zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAvLyAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgIHRoaXMucm9hZG1hcEN1cnJlbnQrKztcbiAgICAgICAgLy8gICAgICAgdGhpcy5yb2FkbWFwQmxvY2sgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucm9hZG1hcEJsb2NrID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgIH0sIDEzMDApO1xuICAgICAgICAvLyAgICAgICBpZiAodGhpcy5yb2FkbWFwQ3VycmVudCA+PSB0aGlzLnJvYWRtYXBJdGVtcy5sZW5ndGgpe1xuICAgICAgICAvLyAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yb2FkbWFwSW50ZXJ2YWwpO1xuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfSwgMjAwKTtcblxuICAgIC8vIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yb2FkbWFwQXV0b0xhdW5jaC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBzY3JvbGxTdGFydGVkKCl7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzAgJiYgdGhpcy5kZWZhdWx0U2Nyb2xsWSAhPSB3aW5kb3cuc2Nyb2xsWSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNjcm9sbE1vbml0b3IpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmdfX2JvdHRvbScpLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbFN0YXJ0ZWQnKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbE1hbmFnZXIge1xuXG4gIHN0YXRpYyBnZXRTY3JvbGxQb3MoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgaXNJblZpZXdwb3J0KGVsZW1lbnQsIGZyYWN0aW9uVmlzaWJsZSA9IDApIHtcbiAgICBpZiAoZnJhY3Rpb25WaXNpYmxlID4gMSB8fCBmcmFjdGlvblZpc2libGUgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2JsZW1lIGRlIHBvdXJjZW50YWdlJyk7XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuXG4gICAgY29uc3QgbWFyZ2VZID0gZnJhY3Rpb25WaXNpYmxlICogd2luZG93SGVpZ2h0O1xuICAgIGNvbnN0IG1hcmdlWCA9IGZyYWN0aW9uVmlzaWJsZSAqIHdpbmRvd1dpZHRoO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHJlY3QudG9wIDw9IHdpbmRvd0hlaWdodCAtIG1hcmdlWVxuICAgICAgJiYgcmVjdC5sZWZ0IDw9IHdpbmRvd1dpZHRoIC0gbWFyZ2VYXG4gICAgICAmJiByZWN0LmJvdHRvbSA+IG1hcmdlWVxuICAgICAgJiYgcmVjdC5yaWdodCA+IG1hcmdlWFxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgaXNJbnRlcnNlY3RpbmdWaWV3cG9ydChlbGVtZW50KSB7XG5cbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgXG4gICAgaWYgKHJlY3QudG9wIDwgd2luZG93SGVpZ2h0ICYmIHJlY3QudG9wID4gLXJlY3QuaGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnRlcnNlY3Rpb25SYXRpbyhlbGVtZW50LCByZW1vdmVIZWlnaHQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICBsZXQgZGlzdGFuY2UgPSByZWN0LmhlaWdodCArIHdpbmRvd0hlaWdodDtcbiAgICBpZiAocmVtb3ZlSGVpZ2h0KSBkaXN0YW5jZSA9IHJlY3QuaGVpZ2h0ICsgd2luZG93SGVpZ2h0IC0gcmVtb3ZlSGVpZ2h0O1xuICAgIFxuICAgIGNvbnN0IHBlcmNlbnRUcmF2ZWxsZWQgPSAoZGlzdGFuY2UgLSByZWN0LmJvdHRvbSkgLyBkaXN0YW5jZTtcbiAgICByZXR1cm4gcGVyY2VudFRyYXZlbGxlZDtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlYWR5KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHJlc29sdmUoZXZlbnQpKTtcbiAgICB9XG4gIH0pO1xufVxubGV0IGJyZWFrcG9pbnRzVmFsdWU7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QnJlYWtwb2ludHNGcm9tQ1NTKCkge1xuICBpZiAoIWJyZWFrcG9pbnRzVmFsdWUpIHtcbiAgICBicmVha3BvaW50c1ZhbHVlID0ge307XG4gICAgY29uc3QgY3NzQnJlYWtwb2ludHMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJyZWFrcG9pbnRzJyk7XG4gICAgY3NzQnJlYWtwb2ludHMuc3BsaXQoJywnKS5mb3JFYWNoKChjc3NCcmVha3BvaW50KSA9PiB7XG4gICAgICBpZiAoY3NzQnJlYWtwb2ludC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChjc3NCcmVha3BvaW50WzBdID09PSAnICcpIHtcbiAgICAgICAgICBjc3NCcmVha3BvaW50ID0gY3NzQnJlYWtwb2ludC5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnJlYWtwb2ludEluZm9zID0gY3NzQnJlYWtwb2ludC5zcGxpdCgnICcpO1xuICAgICAgICBicmVha3BvaW50c1ZhbHVlW2JyZWFrcG9pbnRJbmZvc1swXV0gPSBwYXJzZUludChicmVha3BvaW50SW5mb3NbMV0sIDEwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJlYWtwb2ludHMoKSB7XG4gIGluaXRCcmVha3BvaW50c0Zyb21DU1MoKTtcbiAgcmV0dXJuIGJyZWFrcG9pbnRzVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dpbmRvd0xhcmdlcihicmVha3BvaW50KSB7XG4gIGNvbnN0IGJyZWFrcG9pbnRWYWx1ZSA9IGJyZWFrcG9pbnRzKClbYnJlYWtwb2ludF07XG5cbiAgaWYgKCFicmVha3BvaW50VmFsdWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBjb3JyZXNwb25kaW5nIGJyZWFrcG9pbnQnLCBicmVha3BvaW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPj0gYnJlYWtwb2ludFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXaW5kb3dTbWFsbGVyKGJyZWFrcG9pbnQpIHtcbiAgY29uc3QgYnJlYWtwb2ludFZhbHVlID0gYnJlYWtwb2ludHMoKVticmVha3BvaW50XTtcblxuICBpZiAoIWJyZWFrcG9pbnRWYWx1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIGNvcnJlc3BvbmRpbmcgYnJlYWtwb2ludCcsIGJyZWFrcG9pbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IGJyZWFrcG9pbnRWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRCcmVha3BvaW50KCkge1xuICBjb25zdCBjdXJyZW50QnJlYWtwb2ludHMgPSBicmVha3BvaW50cygpO1xuICBsZXQgY3VycmVudEJyZWFrcG9pbnQ7XG5cbiAgT2JqZWN0LmtleXMoY3VycmVudEJyZWFrcG9pbnRzKS5mb3JFYWNoKChicmVha3BvaW50KSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gY3VycmVudEJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICBjdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY3VycmVudEJyZWFrcG9pbnQ7XG59XG5cbi8qKlxuKiBDcmVhdGUgYSBjb29raWVcbiovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKGNvb2tpZU5hbWUsIGNvb2tpZVZhbHVlLCBkdXJhdGlvbkluRGF5KSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gIGV4cGlyZXMuc2V0VGltZSh0b2RheS5nZXRUaW1lKCkgKyAoZHVyYXRpb25JbkRheSAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgZG9jdW1lbnQuY29va2llID0gYCR7Y29va2llTmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQoY29va2llVmFsdWUpfTtleHBpcmVzPSR7ZXhwaXJlcy50b0dNVFN0cmluZygpfTtwYXRoPS87YDtcbn1cbi8qKlxuKiBDaGVjayBpZiBhIGNvb2tpZSBleGlzdHMsIGlmIHllcyByZXR1cm4gaXRzIHZhbHVlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShjb29raWVOYW1lKSB7XG4gIGNvbnN0IG5hbWUgPSBgJHtjb29raWVOYW1lfT1gO1xuICBjb25zdCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XG4gIGNvbnN0IGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBsZXQgYyA9IGNhW2ldO1xuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbGVlcChtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3JlYWR5fSBmcm9tICcuL3V0aWxzL3V0aWxzJztcbmltcG9ydCBQYWdlSG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IEFwcGVhck1hbmFnZXIgZnJvbSAnLi9hbmltYXRpb25zL2FwcGVhci1tYW5hZ2VyJztcbmltcG9ydCBQYXJhbGxheE1hbmFnZXIgZnJvbSAnLi9hbmltYXRpb25zL3BhcmFsbGF4LW1hbmFnZXInO1xuaW1wb3J0IEhlYWRlck1hbmFnZXIgZnJvbSAnLi9hbmltYXRpb25zL2hlYWRlci1tYW5hZ2VyJztcblxucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgQXBwZWFyTWFuYWdlci5pbml0KCk7XG4gIFBhcmFsbGF4TWFuYWdlci5pbml0KCk7XG4gIEhlYWRlck1hbmFnZXIuaW5pdCgpO1xuICBQYWdlSG9tZS5pbml0KCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=