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


class PageHome {
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

    if (_utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].isIntersectingViewport(this.landingParallax)) {

      const initial = 0;
      const final = 220;
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      let ratio = _utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getIntersectionRatio(this.landingParallax, windowHeight);
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
/* harmony export */   "setCookie": () => (/* binding */ setCookie)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRG9EOztBQUVyQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9GQUFvQztBQUM5QztBQUNBLG9CQUFvQixrRkFBa0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qm9EOztBQUVyQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsb0ZBQW9DOztBQUU1QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0ZBQWtDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRE87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFdBQVcsR0FBRyxpQ0FBaUMsVUFBVSx1QkFBdUIsT0FBTztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0JBQWtCLFdBQVc7QUFDN0I7QUFDQSxtQ0FBbUM7O0FBRW5DLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDQTtBQUNvQjtBQUNJOztBQUU1RCxtREFBSztBQUNMLEVBQUUsdUVBQWtCO0FBQ3BCLEVBQUUseUVBQW9CO0FBQ3RCLEVBQUUsd0RBQWE7QUFDZixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9va3A0Ly4vanMvYW5pbWF0aW9ucy9hcHBlYXItbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9va3A0Ly4vanMvYW5pbWF0aW9ucy9wYXJhbGxheC1tYW5hZ2VyLmpzIiwid2VicGFjazovL29rcDQvLi9qcy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL29rcDQvLi9qcy91dGlscy9zY3JvbGwtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9va3A0Ly4vanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2twNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9va3A0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9va3A0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2twNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29rcDQvLi9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBlYXJNYW5hZ2VyIHtcblxuICBzdGF0aWMgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRSZXZlYWwoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0UmV2ZWFsKCl7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25BcHBlYXI7XG4gICAgdGhpcy5vcHRpb25zQXBwZWFyID0ge1xuICAgICAgcm9vdDogbnVsbCxcbiAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMuYnVpbGRUaHJlc2hvbGRMaXN0QW5pbXMoMTAwMDApXG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9icygpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUludGVyc2VjdGlvbk9icygpe1xuICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXZlYWxdOm5vdCguaXMtaW4tdmlldyknKTtcbiAgICB2YXIgZWxzX2N1c3RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJldmVhbC1jdXN0b21dOm5vdCguaXMtaW4tdmlldyknKTtcblxuICAgIGlmIChlbHMgfHwgZWxzX2N1c3RvbSl7XG4gICAgICB0aGlzLmludGVyc2VjdGlvbkFwcGVhciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLmhhbmRsZUFwcGVhci5iaW5kKHRoaXMpLCB0aGlzLm9wdGlvbnNBcHBlYXIpO1xuICAgIH1cblxuICAgIGlmIChlbHMpe1xuICAgICAgZWxzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICB0aGlzLmludGVyc2VjdGlvbkFwcGVhci5vYnNlcnZlKGVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlbHNfY3VzdG9tKXtcbiAgICAgIGVsc19jdXN0b20uZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uQXBwZWFyLm9ic2VydmUoZWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgaGFuZGxlQXBwZWFyKGVudHJpZXMsIGludGVyc2VjdGlvbkFwcGVhcikge1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgaWYgKCFlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1pbi12aWV3JykpIHtcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtaW4tdmlldycpO1xuICAgICAgICAgIGlmIChlbnRyeS50YXJnZXQuZGF0YXNldC5yZXZlYWxDdXN0b20gfHwgZW50cnkudGFyZ2V0LmRhdGFzZXQucmV2ZWFsKXtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uQXBwZWFyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkVGhyZXNob2xkTGlzdEFuaW1zKG51bVN0ZXBzKSB7XG4gICAgdmFyIHRocmVzaG9sZHMgPSBbXTtcblxuICAgIGZvciAodmFyIGk9MS4wOyBpPD1udW1TdGVwczsgaSsrKSB7XG4gICAgICB2YXIgcmF0aW8gPSBpL251bVN0ZXBzO1xuICAgICAgdGhyZXNob2xkcy5wdXNoKHJhdGlvKTtcbiAgICB9XG5cbiAgICB0aHJlc2hvbGRzLnB1c2goMCk7XG4gICAgcmV0dXJuIHRocmVzaG9sZHM7XG4gIH1cblxufVxuIiwiaW1wb3J0IFNjcm9sbE1hbmFnZXIgZnJvbSAnLi4vdXRpbHMvc2Nyb2xsLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbGxheE1hbmFnZXIge1xuICBzdGF0aWMgaW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZVBhcmFsbGF4KCk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlUGFyYWxsYXgoKXtcbiAgICB0aGlzLmVsZW1zUGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYXJhbGxheF0nKTtcbiAgICB0aGlzLmVsZW1zUGFyYWxsYXguZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoU2Nyb2xsTWFuYWdlci5pc0ludGVyc2VjdGluZ1ZpZXdwb3J0KGVsKSkge1xuICAgICAgICBjb25zdCBmaW5hbCA9IGVsLmRhdGFzZXQucGFyYWxsYXg7XG4gICAgICAgIGxldCByYXRpbyA9IFNjcm9sbE1hbmFnZXIuZ2V0SW50ZXJzZWN0aW9uUmF0aW8oZWwpO1xuICAgICAgICBsZXQgdHJhbnNmb3JtUmF0aW8gPSByYXRpby50b0ZpeGVkKDQpKmZpbmFsO1xuICAgICAgICBsZXQgdHJhbnNmb3JtUmF0aW9Dc3MgPSBcInRyYW5zbGF0ZTNkKDAsIFwiICsgdHJhbnNmb3JtUmF0aW8gKyBcInB4LCAwKVwiO1xuICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1SYXRpb0NzcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVQYXJhbGxheC5iaW5kKHRoaXMpKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgU2Nyb2xsTWFuYWdlciBmcm9tICcuLi91dGlscy9zY3JvbGwtbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VIb21lIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgdGhpcy5pbml0SG92ZXJMYW5kaW5nKCk7XG4gICAgdGhpcy5pbml0UGFyYWxsYXhMYW5kaW5nKCk7XG4gICAgdGhpcy5pbml0U3RpY2t5VW5pdmVyc2UoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0SG92ZXJMYW5kaW5nKCkge1xuICAgIHRoaXMubGFuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24ubGFuZGluZycpO1xuICAgIHRoaXMuaGFsb0xhbmRpbmdDb250YWluZXIgPSB0aGlzLmxhbmRpbmcucXVlcnlTZWxlY3RvcignLmhvdmVyTGFuZGluZycpO1xuICAgIHRoaXMuaGFsb0xhbmRpbmcgPSB0aGlzLmxhbmRpbmcucXVlcnlTZWxlY3RvcignLmhvdmVyTGFuZGluZyAuaGFsb0xhbmRpbmcnKTtcblxuICAgIGlmICh0aGlzLmxhbmRpbmcpIHtcbiAgICAgIHRoaXMubGFuZGluZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZXYgPT4ge1xuICAgICAgICB0aGlzLmhvdmVyTGFuZGluZyhldmVudCwgJ2VudGVyJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sYW5kaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBldiA9PiB7XG4gICAgICAgIHRoaXMuaG92ZXJMYW5kaW5nKGV2ZW50LCAnbGVhdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxhbmRpbmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXYgPT4ge1xuICAgICAgICB0aGlzLmhvdmVyTGFuZGluZyhldmVudCwgJ21vdmUnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBob3ZlckxhbmRpbmcoZXZlbnQsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PSAnZW50ZXInKSB7XG4gICAgICB0aGlzLmhhbG9MYW5kaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09ICdsZWF2ZScpIHtcbiAgICAgIHRoaXMuaGFsb0xhbmRpbmdDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ21vdmUnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IG1vdXNlWCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQucGFnZVk7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1Dc3MgPSAndHJhbnNsYXRlM2QoJyArIG1vdXNlWCArICdweCwgJyArIG1vdXNlWSArICdweCwgMCknO1xuICAgICAgICB0aGlzLmhhbG9MYW5kaW5nLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybUNzcztcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGluaXRQYXJhbGxheExhbmRpbmcoKSB7XG4gICAgdGhpcy5sYW5kaW5nUGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmxhbmRpbmcgLmJnX19pbGx1cycpO1xuICAgIHRoaXMucGFyYWxsYXhMYW5kaW5nKCk7XG4gIH1cblxuICBzdGF0aWMgcGFyYWxsYXhMYW5kaW5nKCkge1xuXG4gICAgaWYgKFNjcm9sbE1hbmFnZXIuaXNJbnRlcnNlY3RpbmdWaWV3cG9ydCh0aGlzLmxhbmRpbmdQYXJhbGxheCkpIHtcblxuICAgICAgY29uc3QgaW5pdGlhbCA9IDA7XG4gICAgICBjb25zdCBmaW5hbCA9IDIyMDtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICBsZXQgcmF0aW8gPSBTY3JvbGxNYW5hZ2VyLmdldEludGVyc2VjdGlvblJhdGlvKHRoaXMubGFuZGluZ1BhcmFsbGF4LCB3aW5kb3dIZWlnaHQpO1xuICAgICAgbGV0IHRyYW5zZm9ybVJhdGlvID0gcmF0aW8udG9GaXhlZCg0KSpmaW5hbDtcbiAgICAgIGxldCB0cmFuc2Zvcm1SYXRpb0NzcyA9IFwidHJhbnNsYXRlM2QoMCwgXCIgKyB0cmFuc2Zvcm1SYXRpbyArIFwicHgsIDApXCI7XG4gICAgICB0aGlzLmxhbmRpbmdQYXJhbGxheC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1SYXRpb0NzcztcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaW5pdFBhcmFsbGF4TGFuZGluZy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0U3RpY2t5VW5pdmVyc2UoKSB7XG4gICAgdGhpcy51bml2ZXJzZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLnVuaXZlcnNlJyk7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMudW5pdmVyc2VTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgbGV0IHRvcFBvc2l0aW9uU3RpY2t5ID0gLShyZWN0LmhlaWdodCAtIHdpbmRvd0hlaWdodCkgLSAyNTA7XG4gICAgbGV0IHRvcFBvc2l0aW9uQ3NzID0gdG9wUG9zaXRpb25TdGlja3kgKyBcInB4XCI7XG4gICAgdGhpcy51bml2ZXJzZVNlY3Rpb24uc3R5bGUudG9wID0gdG9wUG9zaXRpb25Dc3M7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbE1hbmFnZXIge1xuXG4gIHN0YXRpYyBnZXRTY3JvbGxQb3MoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgaXNJblZpZXdwb3J0KGVsZW1lbnQsIGZyYWN0aW9uVmlzaWJsZSA9IDApIHtcbiAgICBpZiAoZnJhY3Rpb25WaXNpYmxlID4gMSB8fCBmcmFjdGlvblZpc2libGUgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2JsZW1lIGRlIHBvdXJjZW50YWdlJyk7XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuXG4gICAgY29uc3QgbWFyZ2VZID0gZnJhY3Rpb25WaXNpYmxlICogd2luZG93SGVpZ2h0O1xuICAgIGNvbnN0IG1hcmdlWCA9IGZyYWN0aW9uVmlzaWJsZSAqIHdpbmRvd1dpZHRoO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHJlY3QudG9wIDw9IHdpbmRvd0hlaWdodCAtIG1hcmdlWVxuICAgICAgJiYgcmVjdC5sZWZ0IDw9IHdpbmRvd1dpZHRoIC0gbWFyZ2VYXG4gICAgICAmJiByZWN0LmJvdHRvbSA+IG1hcmdlWVxuICAgICAgJiYgcmVjdC5yaWdodCA+IG1hcmdlWFxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgaXNJbnRlcnNlY3RpbmdWaWV3cG9ydChlbGVtZW50KSB7XG5cbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgXG4gICAgaWYgKHJlY3QudG9wIDwgd2luZG93SGVpZ2h0ICYmIHJlY3QudG9wID4gLXJlY3QuaGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnRlcnNlY3Rpb25SYXRpbyhlbGVtZW50LCByZW1vdmVIZWlnaHQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICBsZXQgZGlzdGFuY2UgPSByZWN0LmhlaWdodCArIHdpbmRvd0hlaWdodDtcbiAgICBpZiAocmVtb3ZlSGVpZ2h0KSBkaXN0YW5jZSA9IHJlY3QuaGVpZ2h0ICsgd2luZG93SGVpZ2h0IC0gcmVtb3ZlSGVpZ2h0O1xuICAgIFxuICAgIGNvbnN0IHBlcmNlbnRUcmF2ZWxsZWQgPSAoZGlzdGFuY2UgLSByZWN0LmJvdHRvbSkgLyBkaXN0YW5jZTtcbiAgICByZXR1cm4gcGVyY2VudFRyYXZlbGxlZDtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlYWR5KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHJlc29sdmUoZXZlbnQpKTtcbiAgICB9XG4gIH0pO1xufVxubGV0IGJyZWFrcG9pbnRzVmFsdWU7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QnJlYWtwb2ludHNGcm9tQ1NTKCkge1xuICBpZiAoIWJyZWFrcG9pbnRzVmFsdWUpIHtcbiAgICBicmVha3BvaW50c1ZhbHVlID0ge307XG4gICAgY29uc3QgY3NzQnJlYWtwb2ludHMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJyZWFrcG9pbnRzJyk7XG4gICAgY3NzQnJlYWtwb2ludHMuc3BsaXQoJywnKS5mb3JFYWNoKChjc3NCcmVha3BvaW50KSA9PiB7XG4gICAgICBpZiAoY3NzQnJlYWtwb2ludC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChjc3NCcmVha3BvaW50WzBdID09PSAnICcpIHtcbiAgICAgICAgICBjc3NCcmVha3BvaW50ID0gY3NzQnJlYWtwb2ludC5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnJlYWtwb2ludEluZm9zID0gY3NzQnJlYWtwb2ludC5zcGxpdCgnICcpO1xuICAgICAgICBicmVha3BvaW50c1ZhbHVlW2JyZWFrcG9pbnRJbmZvc1swXV0gPSBwYXJzZUludChicmVha3BvaW50SW5mb3NbMV0sIDEwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJlYWtwb2ludHMoKSB7XG4gIGluaXRCcmVha3BvaW50c0Zyb21DU1MoKTtcbiAgcmV0dXJuIGJyZWFrcG9pbnRzVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dpbmRvd0xhcmdlcihicmVha3BvaW50KSB7XG4gIGNvbnN0IGJyZWFrcG9pbnRWYWx1ZSA9IGJyZWFrcG9pbnRzKClbYnJlYWtwb2ludF07XG5cbiAgaWYgKCFicmVha3BvaW50VmFsdWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBjb3JyZXNwb25kaW5nIGJyZWFrcG9pbnQnLCBicmVha3BvaW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPj0gYnJlYWtwb2ludFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXaW5kb3dTbWFsbGVyKGJyZWFrcG9pbnQpIHtcbiAgY29uc3QgYnJlYWtwb2ludFZhbHVlID0gYnJlYWtwb2ludHMoKVticmVha3BvaW50XTtcblxuICBpZiAoIWJyZWFrcG9pbnRWYWx1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIGNvcnJlc3BvbmRpbmcgYnJlYWtwb2ludCcsIGJyZWFrcG9pbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IGJyZWFrcG9pbnRWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRCcmVha3BvaW50KCkge1xuICBjb25zdCBjdXJyZW50QnJlYWtwb2ludHMgPSBicmVha3BvaW50cygpO1xuICBsZXQgY3VycmVudEJyZWFrcG9pbnQ7XG5cbiAgT2JqZWN0LmtleXMoY3VycmVudEJyZWFrcG9pbnRzKS5mb3JFYWNoKChicmVha3BvaW50KSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gY3VycmVudEJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICBjdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY3VycmVudEJyZWFrcG9pbnQ7XG59XG5cbi8qKlxuKiBDcmVhdGUgYSBjb29raWVcbiovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKGNvb2tpZU5hbWUsIGNvb2tpZVZhbHVlLCBkdXJhdGlvbkluRGF5KSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gIGV4cGlyZXMuc2V0VGltZSh0b2RheS5nZXRUaW1lKCkgKyAoZHVyYXRpb25JbkRheSAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgZG9jdW1lbnQuY29va2llID0gYCR7Y29va2llTmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQoY29va2llVmFsdWUpfTtleHBpcmVzPSR7ZXhwaXJlcy50b0dNVFN0cmluZygpfTtwYXRoPS87YDtcbn1cbi8qKlxuKiBDaGVjayBpZiBhIGNvb2tpZSBleGlzdHMsIGlmIHllcyByZXR1cm4gaXRzIHZhbHVlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShjb29raWVOYW1lKSB7XG4gIGNvbnN0IG5hbWUgPSBgJHtjb29raWVOYW1lfT1gO1xuICBjb25zdCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XG4gIGNvbnN0IGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBsZXQgYyA9IGNhW2ldO1xuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cmVhZHl9IGZyb20gJy4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IFBhZ2VIb21lIGZyb20gJy4vcGFnZXMvaG9tZSc7XG5pbXBvcnQgQXBwZWFyTWFuYWdlciBmcm9tICcuL2FuaW1hdGlvbnMvYXBwZWFyLW1hbmFnZXInO1xuaW1wb3J0IFBhcmFsbGF4TWFuYWdlciBmcm9tICcuL2FuaW1hdGlvbnMvcGFyYWxsYXgtbWFuYWdlcic7XG5cbnJlYWR5KCkudGhlbigoKSA9PiB7XG4gIEFwcGVhck1hbmFnZXIuaW5pdCgpO1xuICBQYXJhbGxheE1hbmFnZXIuaW5pdCgpO1xuICBQYWdlSG9tZS5pbml0KCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=