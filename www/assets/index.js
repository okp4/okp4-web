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
    this.optionsAppear = {
      root: null,
      rootMargin: "0px",
      threshold: this.buildThresholdListAnims(10000)
    };
    this.createIntersectionObs();
  }

  static createIntersectionObs(){
    var els = document.querySelectorAll('[data-reveal]:not(.is-in-view)');
    var els_custom = document.querySelectorAll('[data-reveal-custom]:not(.is-in-view)');

    if (els || els_custom){
      this.intersectionAppear = new IntersectionObserver(this.handleAppear.bind(this), this.optionsAppear);
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
    this.handleParallax();
  }

  static handleParallax(){
    this.elemsParallax = document.querySelectorAll('[data-parallax]');
    this.elemsParallax.forEach(el => {
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

// import {sleep} from '../utils/utils';

class PageHome {
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





(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.ready)().then(() => {
  _animations_appear_manager__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  _animations_parallax_manager__WEBPACK_IMPORTED_MODULE_3__["default"].init();
  _pages_home__WEBPACK_IMPORTED_MODULE_1__["default"].init();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFdBQVcsR0FBRyxpQ0FBaUMsVUFBVSx1QkFBdUIsT0FBTztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0JBQWtCLFdBQVc7QUFDN0I7QUFDQSxtQ0FBbUM7O0FBRW5DLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7O1VDbEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDQTtBQUNvQjtBQUNJOztBQUU1RCxtREFBSztBQUNMLEVBQUUsdUVBQWtCO0FBQ3BCLEVBQUUseUVBQW9CO0FBQ3RCLEVBQUUsd0RBQWE7QUFDZixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9va3A0Ly4vanMvYW5pbWF0aW9ucy9hcHBlYXItbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9va3A0Ly4vanMvYW5pbWF0aW9ucy9wYXJhbGxheC1tYW5hZ2VyLmpzIiwid2VicGFjazovL29rcDQvLi9qcy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL29rcDQvLi9qcy91dGlscy9zY3JvbGwtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9va3A0Ly4vanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2twNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9va3A0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9va3A0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2twNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29rcDQvLi9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBlYXJNYW5hZ2VyIHtcblxuICBzdGF0aWMgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRSZXZlYWwoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0UmV2ZWFsKCl7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25BcHBlYXI7XG4gICAgdGhpcy5vcHRpb25zQXBwZWFyID0ge1xuICAgICAgcm9vdDogbnVsbCxcbiAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMuYnVpbGRUaHJlc2hvbGRMaXN0QW5pbXMoMTAwMDApXG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9icygpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUludGVyc2VjdGlvbk9icygpe1xuICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXZlYWxdOm5vdCguaXMtaW4tdmlldyknKTtcbiAgICB2YXIgZWxzX2N1c3RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJldmVhbC1jdXN0b21dOm5vdCguaXMtaW4tdmlldyknKTtcblxuICAgIGlmIChlbHMgfHwgZWxzX2N1c3RvbSl7XG4gICAgICB0aGlzLmludGVyc2VjdGlvbkFwcGVhciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLmhhbmRsZUFwcGVhci5iaW5kKHRoaXMpLCB0aGlzLm9wdGlvbnNBcHBlYXIpO1xuICAgIH1cblxuICAgIGlmIChlbHMpe1xuICAgICAgZWxzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICB0aGlzLmludGVyc2VjdGlvbkFwcGVhci5vYnNlcnZlKGVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlbHNfY3VzdG9tKXtcbiAgICAgIGVsc19jdXN0b20uZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uQXBwZWFyLm9ic2VydmUoZWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgaGFuZGxlQXBwZWFyKGVudHJpZXMsIGludGVyc2VjdGlvbkFwcGVhcikge1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgaWYgKCFlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1pbi12aWV3JykpIHtcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtaW4tdmlldycpO1xuICAgICAgICAgIGlmIChlbnRyeS50YXJnZXQuZGF0YXNldC5yZXZlYWxDdXN0b20gfHwgZW50cnkudGFyZ2V0LmRhdGFzZXQucmV2ZWFsKXtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uQXBwZWFyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkVGhyZXNob2xkTGlzdEFuaW1zKG51bVN0ZXBzKSB7XG4gICAgdmFyIHRocmVzaG9sZHMgPSBbXTtcblxuICAgIGZvciAodmFyIGk9MS4wOyBpPD1udW1TdGVwczsgaSsrKSB7XG4gICAgICB2YXIgcmF0aW8gPSBpL251bVN0ZXBzO1xuICAgICAgdGhyZXNob2xkcy5wdXNoKHJhdGlvKTtcbiAgICB9XG5cbiAgICB0aHJlc2hvbGRzLnB1c2goMCk7XG4gICAgcmV0dXJuIHRocmVzaG9sZHM7XG4gIH1cblxufVxuIiwiaW1wb3J0IFNjcm9sbE1hbmFnZXIgZnJvbSAnLi4vdXRpbHMvc2Nyb2xsLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbGxheE1hbmFnZXIge1xuICBzdGF0aWMgaW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZVBhcmFsbGF4KCk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlUGFyYWxsYXgoKXtcbiAgICB0aGlzLmVsZW1zUGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYXJhbGxheF0nKTtcbiAgICB0aGlzLmVsZW1zUGFyYWxsYXguZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoU2Nyb2xsTWFuYWdlci5pc0ludGVyc2VjdGluZ1ZpZXdwb3J0KGVsKSkge1xuICAgICAgICBjb25zdCBmaW5hbCA9IGVsLmRhdGFzZXQucGFyYWxsYXg7XG4gICAgICAgIGxldCByYXRpbyA9IFNjcm9sbE1hbmFnZXIuZ2V0SW50ZXJzZWN0aW9uUmF0aW8oZWwpO1xuICAgICAgICBsZXQgdHJhbnNmb3JtUmF0aW8gPSByYXRpby50b0ZpeGVkKDQpKmZpbmFsO1xuICAgICAgICBsZXQgdHJhbnNmb3JtUmF0aW9Dc3MgPSBcInRyYW5zbGF0ZTNkKDAsIFwiICsgdHJhbnNmb3JtUmF0aW8gKyBcInB4LCAwKVwiO1xuICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1SYXRpb0NzcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVQYXJhbGxheC5iaW5kKHRoaXMpKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgU2Nyb2xsTWFuYWdlciBmcm9tICcuLi91dGlscy9zY3JvbGwtbWFuYWdlcic7XG4vLyBpbXBvcnQge3NsZWVwfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VIb21lIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgdGhpcy5pbml0SG92ZXJMYW5kaW5nKCk7XG4gICAgdGhpcy5pbml0UGFyYWxsYXhMYW5kaW5nKCk7XG4gICAgdGhpcy5pbml0U3RpY2t5VW5pdmVyc2UoKTtcbiAgICB0aGlzLmluaXRSb2FkbWFwKCk7XG5cbiAgICB0aGlzLmRlZmF1bHRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgdGhpcy5zY3JvbGxNb25pdG9yID0gc2V0SW50ZXJ2YWwodGhpcy5zY3JvbGxTdGFydGVkLmJpbmQodGhpcyksIDMwMCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdEhvdmVyTGFuZGluZygpIHtcbiAgICB0aGlzLmxhbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmxhbmRpbmcnKTtcbiAgICB0aGlzLmhhbG9MYW5kaW5nQ29udGFpbmVyID0gdGhpcy5sYW5kaW5nLnF1ZXJ5U2VsZWN0b3IoJy5ob3ZlckxhbmRpbmcnKTtcbiAgICB0aGlzLmhhbG9MYW5kaW5nID0gdGhpcy5sYW5kaW5nLnF1ZXJ5U2VsZWN0b3IoJy5ob3ZlckxhbmRpbmcgLmhhbG9MYW5kaW5nJyk7XG5cbiAgICBpZiAodGhpcy5sYW5kaW5nKSB7XG4gICAgICB0aGlzLmxhbmRpbmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ID0+IHtcbiAgICAgICAgdGhpcy5ob3ZlckxhbmRpbmcoZXZlbnQsICdlbnRlcicpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubGFuZGluZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXYgPT4ge1xuICAgICAgICB0aGlzLmhvdmVyTGFuZGluZyhldmVudCwgJ2xlYXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sYW5kaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ID0+IHtcbiAgICAgICAgdGhpcy5ob3ZlckxhbmRpbmcoZXZlbnQsICdtb3ZlJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaG92ZXJMYW5kaW5nKGV2ZW50LCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5oYWxvTGFuZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSAnbGVhdmUnKSB7XG4gICAgICB0aGlzLmhhbG9MYW5kaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09ICdtb3ZlJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBtb3VzZVggPSBldmVudC5wYWdlWDtcbiAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICBsZXQgdHJhbnNmb3JtQ3NzID0gJ3RyYW5zbGF0ZTNkKCcgKyBtb3VzZVggKyAncHgsICcgKyBtb3VzZVkgKyAncHgsIDApJztcbiAgICAgICAgdGhpcy5oYWxvTGFuZGluZy5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1Dc3M7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbml0UGFyYWxsYXhMYW5kaW5nKCkge1xuICAgIC8vIHRoaXMubGFuZGluZ1BhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5sYW5kaW5nIC5iZ19faWxsdXMnKTtcbiAgICB0aGlzLmxhbmRpbmdQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhcmFsbGF4LWxhbmRpbmddJyk7XG4gICAgdGhpcy5wYXJhbGxheExhbmRpbmcoKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXJhbGxheExhbmRpbmcoKSB7XG5cbiAgICB0aGlzLmxhbmRpbmdQYXJhbGxheC5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChTY3JvbGxNYW5hZ2VyLmlzSW50ZXJzZWN0aW5nVmlld3BvcnQoZWwpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsLmRhdGFzZXQpO1xuICAgICAgICBjb25zdCBpbml0aWFsID0gMDtcbiAgICAgICAgY29uc3QgZmluYWwgPSBlbC5kYXRhc2V0LnBhcmFsbGF4RW5kO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgICBsZXQgcmF0aW87XG4gICAgICAgIGlmIChlbC5kYXRhc2V0LnBhcmFsbGF4QWxyZWFkeSA9PSBcIjFcIikgcmF0aW8gPSBTY3JvbGxNYW5hZ2VyLmdldEludGVyc2VjdGlvblJhdGlvKGVsLCB3aW5kb3dIZWlnaHQpO1xuICAgICAgICBlbHNlIHJhdGlvID0gU2Nyb2xsTWFuYWdlci5nZXRJbnRlcnNlY3Rpb25SYXRpbyhlbCk7XG5cbiAgICAgICAgbGV0IHRyYW5zZm9ybVJhdGlvID0gcmF0aW8udG9GaXhlZCg0KSpmaW5hbDtcbiAgICAgICAgbGV0IHRyYW5zZm9ybVJhdGlvQ3NzID0gXCJ0cmFuc2xhdGUzZCgwLCBcIiArIHRyYW5zZm9ybVJhdGlvICsgXCJweCwgMClcIjtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtUmF0aW9Dc3M7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaW5pdFBhcmFsbGF4TGFuZGluZy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0U3RpY2t5VW5pdmVyc2UoKSB7XG4gICAgdGhpcy51bml2ZXJzZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLnVuaXZlcnNlJyk7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMudW5pdmVyc2VTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgbGV0IHRvcFBvc2l0aW9uU3RpY2t5ID0gLShyZWN0LmhlaWdodCAtIHdpbmRvd0hlaWdodCkgLSAyNTA7XG4gICAgbGV0IHRvcFBvc2l0aW9uQ3NzID0gdG9wUG9zaXRpb25TdGlja3kgKyBcInB4XCI7XG4gICAgdGhpcy51bml2ZXJzZVNlY3Rpb24uc3R5bGUudG9wID0gdG9wUG9zaXRpb25Dc3M7XG4gIH1cblxuICBzdGF0aWMgaW5pdFJvYWRtYXAoKSB7XG4gICAgdGhpcy5yb2FkbWFwSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm9hZG1hcF9faXRlbScpO1xuICAgIHRoaXMucm9hZG1hcEluaXQgPSBmYWxzZTtcbiAgICB0aGlzLnJvYWRtYXBDdXJyZW50ID0gMDtcbiAgICB0aGlzLnJvYWRtYXBJdGVtcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBuZXdJbmRleCA9IGluZGV4KzE7XG4gICAgICBsZXQgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0ICsgNTA7XG4gICAgICBsZXQgaGVpZ2h0Q3NzID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgbGV0IHNlbGVjdG9yQ3NzID0gXCItLXJvYWRtYXAtaXRlbVwiICsgbmV3SW5kZXg7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc2VsZWN0b3JDc3MsIGhlaWdodENzcyk7XG4gICAgICAvLyBpZiAoaW5kZXggIT0gMCkgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKXtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jb21pbmcnKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIHRoaXMucm9hZG1hcEl0ZW1zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm9hZG1hcEF1dG9MYXVuY2goKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyByb2FkbWFwQXV0b0xhdW5jaCgpe1xuICAgIHRoaXMucm9hZG1hcEludGVydmFsO1xuICAgIHRoaXMucm9hZG1hcEJsb2NrID0gZmFsc2U7XG4gICAgdGhpcy5yb2FkbWFwSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgIGlmICghdGhpcy5yb2FkbWFwQmxvY2spe1xuICAgICAgICBpZiAoIXRoaXMucm9hZG1hcEluaXQpe1xuICAgICAgICAgIHZhciBmaXJzdEl0ZW0gPSB0aGlzLnJvYWRtYXBJdGVtc1t0aGlzLnJvYWRtYXBDdXJyZW50XTtcbiAgICAgICAgICBpZiAoU2Nyb2xsTWFuYWdlci5pc0ludGVyc2VjdGluZ1ZpZXdwb3J0KGZpcnN0SXRlbSkpIHtcbiAgICAgICAgICAgIGxldCByYXRpbyA9IFNjcm9sbE1hbmFnZXIuZ2V0SW50ZXJzZWN0aW9uUmF0aW8oZmlyc3RJdGVtKTtcbiAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuNSkge1xuICAgICAgICAgICAgICBmaXJzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgIHRoaXMucm9hZG1hcEluaXQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnJvYWRtYXBDdXJyZW50Kys7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLnJvYWRtYXBCbG9jayA9IHRydWU7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJvYWRtYXBJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2FkbWFwQmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSwgMTMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgdmFyIGN1cnJlbnRJdGVtID0gdGhpcy5yb2FkbWFwSXRlbXNbdGhpcy5yb2FkbWFwQ3VycmVudF07XG4gICAgICAgIC8vICAgaWYgKFNjcm9sbE1hbmFnZXIuaXNJbnRlcnNlY3RpbmdWaWV3cG9ydChjdXJyZW50SXRlbSkpIHtcbiAgICAgICAgLy8gICAgIGxldCByYXRpbyA9IFNjcm9sbE1hbmFnZXIuZ2V0SW50ZXJzZWN0aW9uUmF0aW8oY3VycmVudEl0ZW0pO1xuICAgICAgICAvLyAgICAgaWYgKHJhdGlvID4gMC4xKSB7XG4gICAgICAgIC8vICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gICAgICAgICBjdXJyZW50SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jb21pbmcnKTtcbiAgICAgICAgLy8gICAgICAgfSwgMTAwKTtcbiAgICAgICAgLy8gICAgICAgdGhpcy5yb2FkbWFwSXRlbXMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgICBjdXJyZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgLy8gICAgICAgdGhpcy5yb2FkbWFwQ3VycmVudCsrO1xuICAgICAgICAvLyAgICAgICB0aGlzLnJvYWRtYXBCbG9jayA9IHRydWU7XG4gICAgICAgIC8vICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yb2FkbWFwQmxvY2sgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgfSwgMTMwMCk7XG4gICAgICAgIC8vICAgICAgIGlmICh0aGlzLnJvYWRtYXBDdXJyZW50ID49IHRoaXMucm9hZG1hcEl0ZW1zLmxlbmd0aCl7XG4gICAgICAgIC8vICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJvYWRtYXBJbnRlcnZhbCk7XG4gICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9LCAyMDApO1xuXG4gICAgLy8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJvYWRtYXBBdXRvTGF1bmNoLmJpbmQodGhpcykpO1xuICB9XG5cbiAgc3RhdGljIHNjcm9sbFN0YXJ0ZWQoKXtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAzMCAmJiB0aGlzLmRlZmF1bHRTY3JvbGxZICE9IHdpbmRvdy5zY3JvbGxZKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc2Nyb2xsTW9uaXRvcik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZ19fYm90dG9tJykuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsU3RhcnRlZCcpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsTWFuYWdlciB7XG5cbiAgc3RhdGljIGdldFNjcm9sbFBvcygpIHtcbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBpc0luVmlld3BvcnQoZWxlbWVudCwgZnJhY3Rpb25WaXNpYmxlID0gMCkge1xuICAgIGlmIChmcmFjdGlvblZpc2libGUgPiAxIHx8IGZyYWN0aW9uVmlzaWJsZSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUHJvYmxlbWUgZGUgcG91cmNlbnRhZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG5cbiAgICBjb25zdCBtYXJnZVkgPSBmcmFjdGlvblZpc2libGUgKiB3aW5kb3dIZWlnaHQ7XG4gICAgY29uc3QgbWFyZ2VYID0gZnJhY3Rpb25WaXNpYmxlICogd2luZG93V2lkdGg7XG5cbiAgICByZXR1cm4gKFxuICAgICAgcmVjdC50b3AgPD0gd2luZG93SGVpZ2h0IC0gbWFyZ2VZXG4gICAgICAmJiByZWN0LmxlZnQgPD0gd2luZG93V2lkdGggLSBtYXJnZVhcbiAgICAgICYmIHJlY3QuYm90dG9tID4gbWFyZ2VZXG4gICAgICAmJiByZWN0LnJpZ2h0ID4gbWFyZ2VYXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBpc0ludGVyc2VjdGluZ1ZpZXdwb3J0KGVsZW1lbnQpIHtcblxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICBcbiAgICBpZiAocmVjdC50b3AgPCB3aW5kb3dIZWlnaHQgJiYgcmVjdC50b3AgPiAtcmVjdC5oZWlnaHQpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEludGVyc2VjdGlvblJhdGlvKGVsZW1lbnQsIHJlbW92ZUhlaWdodCA9IGZhbHNlKSB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICAgIGxldCBkaXN0YW5jZSA9IHJlY3QuaGVpZ2h0ICsgd2luZG93SGVpZ2h0O1xuICAgIGlmIChyZW1vdmVIZWlnaHQpIGRpc3RhbmNlID0gcmVjdC5oZWlnaHQgKyB3aW5kb3dIZWlnaHQgLSByZW1vdmVIZWlnaHQ7XG4gICAgXG4gICAgY29uc3QgcGVyY2VudFRyYXZlbGxlZCA9IChkaXN0YW5jZSAtIHJlY3QuYm90dG9tKSAvIGRpc3RhbmNlO1xuICAgIHJldHVybiBwZXJjZW50VHJhdmVsbGVkO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVhZHkoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4gcmVzb2x2ZShldmVudCkpO1xuICAgIH1cbiAgfSk7XG59XG5sZXQgYnJlYWtwb2ludHNWYWx1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCcmVha3BvaW50c0Zyb21DU1MoKSB7XG4gIGlmICghYnJlYWtwb2ludHNWYWx1ZSkge1xuICAgIGJyZWFrcG9pbnRzVmFsdWUgPSB7fTtcbiAgICBjb25zdCBjc3NCcmVha3BvaW50cyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0tYnJlYWtwb2ludHMnKTtcbiAgICBjc3NCcmVha3BvaW50cy5zcGxpdCgnLCcpLmZvckVhY2goKGNzc0JyZWFrcG9pbnQpID0+IHtcbiAgICAgIGlmIChjc3NCcmVha3BvaW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGNzc0JyZWFrcG9pbnRbMF0gPT09ICcgJykge1xuICAgICAgICAgIGNzc0JyZWFrcG9pbnQgPSBjc3NCcmVha3BvaW50LnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBicmVha3BvaW50SW5mb3MgPSBjc3NCcmVha3BvaW50LnNwbGl0KCcgJyk7XG4gICAgICAgIGJyZWFrcG9pbnRzVmFsdWVbYnJlYWtwb2ludEluZm9zWzBdXSA9IHBhcnNlSW50KGJyZWFrcG9pbnRJbmZvc1sxXSwgMTApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmVha3BvaW50cygpIHtcbiAgaW5pdEJyZWFrcG9pbnRzRnJvbUNTUygpO1xuICByZXR1cm4gYnJlYWtwb2ludHNWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2luZG93TGFyZ2VyKGJyZWFrcG9pbnQpIHtcbiAgY29uc3QgYnJlYWtwb2ludFZhbHVlID0gYnJlYWtwb2ludHMoKVticmVha3BvaW50XTtcblxuICBpZiAoIWJyZWFrcG9pbnRWYWx1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIGNvcnJlc3BvbmRpbmcgYnJlYWtwb2ludCcsIGJyZWFrcG9pbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBicmVha3BvaW50VmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dpbmRvd1NtYWxsZXIoYnJlYWtwb2ludCkge1xuICBjb25zdCBicmVha3BvaW50VmFsdWUgPSBicmVha3BvaW50cygpW2JyZWFrcG9pbnRdO1xuXG4gIGlmICghYnJlYWtwb2ludFZhbHVlKSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gY29ycmVzcG9uZGluZyBicmVha3BvaW50JywgYnJlYWtwb2ludCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgYnJlYWtwb2ludFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEJyZWFrcG9pbnQoKSB7XG4gIGNvbnN0IGN1cnJlbnRCcmVha3BvaW50cyA9IGJyZWFrcG9pbnRzKCk7XG4gIGxldCBjdXJyZW50QnJlYWtwb2ludDtcblxuICBPYmplY3Qua2V5cyhjdXJyZW50QnJlYWtwb2ludHMpLmZvckVhY2goKGJyZWFrcG9pbnQpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiBjdXJyZW50QnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjdXJyZW50QnJlYWtwb2ludDtcbn1cblxuLyoqXG4qIENyZWF0ZSBhIGNvb2tpZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUoY29va2llTmFtZSwgY29va2llVmFsdWUsIGR1cmF0aW9uSW5EYXkpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgZXhwaXJlcy5zZXRUaW1lKHRvZGF5LmdldFRpbWUoKSArIChkdXJhdGlvbkluRGF5ICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICBkb2N1bWVudC5jb29raWUgPSBgJHtjb29raWVOYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChjb29raWVWYWx1ZSl9O2V4cGlyZXM9JHtleHBpcmVzLnRvR01UU3RyaW5nKCl9O3BhdGg9LztgO1xufVxuLyoqXG4qIENoZWNrIGlmIGEgY29va2llIGV4aXN0cywgaWYgeWVzIHJldHVybiBpdHMgdmFsdWVcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKGNvb2tpZU5hbWUpIHtcbiAgY29uc3QgbmFtZSA9IGAke2Nvb2tpZU5hbWV9PWA7XG4gIGNvbnN0IGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcbiAgY29uc3QgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBjID0gY2FbaV07XG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cmVhZHl9IGZyb20gJy4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IFBhZ2VIb21lIGZyb20gJy4vcGFnZXMvaG9tZSc7XG5pbXBvcnQgQXBwZWFyTWFuYWdlciBmcm9tICcuL2FuaW1hdGlvbnMvYXBwZWFyLW1hbmFnZXInO1xuaW1wb3J0IFBhcmFsbGF4TWFuYWdlciBmcm9tICcuL2FuaW1hdGlvbnMvcGFyYWxsYXgtbWFuYWdlcic7XG5cbnJlYWR5KCkudGhlbigoKSA9PiB7XG4gIEFwcGVhck1hbmFnZXIuaW5pdCgpO1xuICBQYXJhbGxheE1hbmFnZXIuaW5pdCgpO1xuICBQYWdlSG9tZS5pbml0KCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=