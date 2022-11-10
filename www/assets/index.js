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
      console.log(this.roadmapBlock);
      if (!this.roadmapBlock){
        if (!this.roadmapInit){
          var firstItem = this.roadmapItems[this.roadmapCurrent];
          if (_utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].isIntersectingViewport(firstItem)) {
            let ratio = _utils_scroll_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getIntersectionRatio(firstItem);
            if (ratio > 0.7) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVyxHQUFHLGlDQUFpQyxVQUFVLHVCQUF1QixPQUFPO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxrQkFBa0IsV0FBVztBQUM3QjtBQUNBLG1DQUFtQzs7QUFFbkMsa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7VUNsR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNBO0FBQ29CO0FBQ0k7O0FBRTVELG1EQUFLO0FBQ0wsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx5RUFBb0I7QUFDdEIsRUFBRSx3REFBYTtBQUNmLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29rcDQvLi9qcy9hbmltYXRpb25zL2FwcGVhci1tYW5hZ2VyLmpzIiwid2VicGFjazovL29rcDQvLi9qcy9hbmltYXRpb25zL3BhcmFsbGF4LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb2twNC8uL2pzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2twNC8uL2pzL3V0aWxzL3Njcm9sbC1tYW5hZ2VyLmpzIiwid2VicGFjazovL29rcDQvLi9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9va3A0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29rcDQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29rcDQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9va3A0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2twNC8uL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGVhck1hbmFnZXIge1xuXG4gIHN0YXRpYyBpbml0KCkge1xuICAgIHRoaXMuaW5pdFJldmVhbCgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRSZXZlYWwoKXtcbiAgICB0aGlzLmludGVyc2VjdGlvbkFwcGVhcjtcbiAgICB0aGlzLm9wdGlvbnNBcHBlYXIgPSB7XG4gICAgICByb290OiBudWxsLFxuICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcbiAgICAgIHRocmVzaG9sZDogdGhpcy5idWlsZFRocmVzaG9sZExpc3RBbmltcygxMDAwMClcbiAgICB9O1xuICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzKCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW50ZXJzZWN0aW9uT2JzKCl7XG4gICAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJldmVhbF06bm90KC5pcy1pbi12aWV3KScpO1xuICAgIHZhciBlbHNfY3VzdG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcmV2ZWFsLWN1c3RvbV06bm90KC5pcy1pbi12aWV3KScpO1xuXG4gICAgaWYgKGVscyB8fCBlbHNfY3VzdG9tKXtcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW9uQXBwZWFyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMuaGFuZGxlQXBwZWFyLmJpbmQodGhpcyksIHRoaXMub3B0aW9uc0FwcGVhcik7XG4gICAgfVxuXG4gICAgaWYgKGVscyl7XG4gICAgICBlbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uQXBwZWFyLm9ic2VydmUoZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGVsc19jdXN0b20pe1xuICAgICAgZWxzX2N1c3RvbS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25BcHBlYXIub2JzZXJ2ZShlbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHN0YXRpYyBoYW5kbGVBcHBlYXIoZW50cmllcywgaW50ZXJzZWN0aW9uQXBwZWFyKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBpZiAoIWVudHJ5LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWluLXZpZXcnKSkge1xuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1pbi12aWV3Jyk7XG4gICAgICAgICAgaWYgKGVudHJ5LnRhcmdldC5kYXRhc2V0LnJldmVhbEN1c3RvbSB8fCBlbnRyeS50YXJnZXQuZGF0YXNldC5yZXZlYWwpe1xuICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25BcHBlYXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRUaHJlc2hvbGRMaXN0QW5pbXMobnVtU3RlcHMpIHtcbiAgICB2YXIgdGhyZXNob2xkcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaT0xLjA7IGk8PW51bVN0ZXBzOyBpKyspIHtcbiAgICAgIHZhciByYXRpbyA9IGkvbnVtU3RlcHM7XG4gICAgICB0aHJlc2hvbGRzLnB1c2gocmF0aW8pO1xuICAgIH1cblxuICAgIHRocmVzaG9sZHMucHVzaCgwKTtcbiAgICByZXR1cm4gdGhyZXNob2xkcztcbiAgfVxuXG59XG4iLCJpbXBvcnQgU2Nyb2xsTWFuYWdlciBmcm9tICcuLi91dGlscy9zY3JvbGwtbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4TWFuYWdlciB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIHRoaXMuaGFuZGxlUGFyYWxsYXgoKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVQYXJhbGxheCgpe1xuICAgIHRoaXMuZWxlbXNQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhcmFsbGF4XScpO1xuICAgIHRoaXMuZWxlbXNQYXJhbGxheC5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChTY3JvbGxNYW5hZ2VyLmlzSW50ZXJzZWN0aW5nVmlld3BvcnQoZWwpKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsID0gZWwuZGF0YXNldC5wYXJhbGxheDtcbiAgICAgICAgbGV0IHJhdGlvID0gU2Nyb2xsTWFuYWdlci5nZXRJbnRlcnNlY3Rpb25SYXRpbyhlbCk7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1SYXRpbyA9IHJhdGlvLnRvRml4ZWQoNCkqZmluYWw7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1SYXRpb0NzcyA9IFwidHJhbnNsYXRlM2QoMCwgXCIgKyB0cmFuc2Zvcm1SYXRpbyArIFwicHgsIDApXCI7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVJhdGlvQ3NzO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVBhcmFsbGF4LmJpbmQodGhpcykpO1xuICB9XG5cbn1cbiIsImltcG9ydCBTY3JvbGxNYW5hZ2VyIGZyb20gJy4uL3V0aWxzL3Njcm9sbC1tYW5hZ2VyJztcbi8vIGltcG9ydCB7c2xlZXB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZUhvbWUge1xuICBzdGF0aWMgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRIb3ZlckxhbmRpbmcoKTtcbiAgICB0aGlzLmluaXRQYXJhbGxheExhbmRpbmcoKTtcbiAgICB0aGlzLmluaXRTdGlja3lVbml2ZXJzZSgpO1xuICAgIHRoaXMuaW5pdFJvYWRtYXAoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0SG92ZXJMYW5kaW5nKCkge1xuICAgIHRoaXMubGFuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24ubGFuZGluZycpO1xuICAgIHRoaXMuaGFsb0xhbmRpbmdDb250YWluZXIgPSB0aGlzLmxhbmRpbmcucXVlcnlTZWxlY3RvcignLmhvdmVyTGFuZGluZycpO1xuICAgIHRoaXMuaGFsb0xhbmRpbmcgPSB0aGlzLmxhbmRpbmcucXVlcnlTZWxlY3RvcignLmhvdmVyTGFuZGluZyAuaGFsb0xhbmRpbmcnKTtcblxuICAgIGlmICh0aGlzLmxhbmRpbmcpIHtcbiAgICAgIHRoaXMubGFuZGluZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZXYgPT4ge1xuICAgICAgICB0aGlzLmhvdmVyTGFuZGluZyhldmVudCwgJ2VudGVyJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sYW5kaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBldiA9PiB7XG4gICAgICAgIHRoaXMuaG92ZXJMYW5kaW5nKGV2ZW50LCAnbGVhdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxhbmRpbmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXYgPT4ge1xuICAgICAgICB0aGlzLmhvdmVyTGFuZGluZyhldmVudCwgJ21vdmUnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBob3ZlckxhbmRpbmcoZXZlbnQsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PSAnZW50ZXInKSB7XG4gICAgICB0aGlzLmhhbG9MYW5kaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09ICdsZWF2ZScpIHtcbiAgICAgIHRoaXMuaGFsb0xhbmRpbmdDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ21vdmUnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IG1vdXNlWCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQucGFnZVk7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1Dc3MgPSAndHJhbnNsYXRlM2QoJyArIG1vdXNlWCArICdweCwgJyArIG1vdXNlWSArICdweCwgMCknO1xuICAgICAgICB0aGlzLmhhbG9MYW5kaW5nLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybUNzcztcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGluaXRQYXJhbGxheExhbmRpbmcoKSB7XG4gICAgdGhpcy5sYW5kaW5nUGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmxhbmRpbmcgLmJnX19pbGx1cycpO1xuICAgIHRoaXMucGFyYWxsYXhMYW5kaW5nKCk7XG4gIH1cblxuICBzdGF0aWMgcGFyYWxsYXhMYW5kaW5nKCkge1xuXG4gICAgaWYgKFNjcm9sbE1hbmFnZXIuaXNJbnRlcnNlY3RpbmdWaWV3cG9ydCh0aGlzLmxhbmRpbmdQYXJhbGxheCkpIHtcbiAgICAgIGNvbnN0IGluaXRpYWwgPSAwO1xuICAgICAgY29uc3QgZmluYWwgPSAyMjA7XG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgbGV0IHJhdGlvID0gU2Nyb2xsTWFuYWdlci5nZXRJbnRlcnNlY3Rpb25SYXRpbyh0aGlzLmxhbmRpbmdQYXJhbGxheCwgd2luZG93SGVpZ2h0KTtcbiAgICAgIGxldCB0cmFuc2Zvcm1SYXRpbyA9IHJhdGlvLnRvRml4ZWQoNCkqZmluYWw7XG4gICAgICBsZXQgdHJhbnNmb3JtUmF0aW9Dc3MgPSBcInRyYW5zbGF0ZTNkKDAsIFwiICsgdHJhbnNmb3JtUmF0aW8gKyBcInB4LCAwKVwiO1xuICAgICAgdGhpcy5sYW5kaW5nUGFyYWxsYXguc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtUmF0aW9Dc3M7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmluaXRQYXJhbGxheExhbmRpbmcuYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGF0aWMgaW5pdFN0aWNreVVuaXZlcnNlKCkge1xuICAgIHRoaXMudW5pdmVyc2VTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi51bml2ZXJzZScpO1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnVuaXZlcnNlU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGxldCB0b3BQb3NpdGlvblN0aWNreSA9IC0ocmVjdC5oZWlnaHQgLSB3aW5kb3dIZWlnaHQpIC0gMjUwO1xuICAgIGxldCB0b3BQb3NpdGlvbkNzcyA9IHRvcFBvc2l0aW9uU3RpY2t5ICsgXCJweFwiO1xuICAgIHRoaXMudW5pdmVyc2VTZWN0aW9uLnN0eWxlLnRvcCA9IHRvcFBvc2l0aW9uQ3NzO1xuICB9XG5cbiAgc3RhdGljIGluaXRSb2FkbWFwKCkge1xuICAgIHRoaXMucm9hZG1hcEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvYWRtYXBfX2l0ZW0nKTtcbiAgICB0aGlzLnJvYWRtYXBJbml0ID0gZmFsc2U7XG4gICAgdGhpcy5yb2FkbWFwQ3VycmVudCA9IDA7XG4gICAgdGhpcy5yb2FkbWFwSXRlbXMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgbmV3SW5kZXggPSBpbmRleCsxO1xuICAgICAgbGV0IGhlaWdodCA9IGVsLm9mZnNldEhlaWdodCArIDUwO1xuICAgICAgbGV0IGhlaWdodENzcyA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgIGxldCBzZWxlY3RvckNzcyA9IFwiLS1yb2FkbWFwLWl0ZW1cIiArIG5ld0luZGV4O1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHNlbGVjdG9yQ3NzLCBoZWlnaHRDc3MpO1xuICAgICAgLy8gaWYgKGluZGV4ICE9IDApIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSl7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtY29taW5nJyk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB0aGlzLnJvYWRtYXBJdGVtcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvYWRtYXBBdXRvTGF1bmNoKCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgcm9hZG1hcEF1dG9MYXVuY2goKXtcbiAgICB0aGlzLnJvYWRtYXBJbnRlcnZhbDtcbiAgICB0aGlzLnJvYWRtYXBCbG9jayA9IGZhbHNlO1xuICAgIHRoaXMucm9hZG1hcEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJvYWRtYXBCbG9jayk7XG4gICAgICBpZiAoIXRoaXMucm9hZG1hcEJsb2NrKXtcbiAgICAgICAgaWYgKCF0aGlzLnJvYWRtYXBJbml0KXtcbiAgICAgICAgICB2YXIgZmlyc3RJdGVtID0gdGhpcy5yb2FkbWFwSXRlbXNbdGhpcy5yb2FkbWFwQ3VycmVudF07XG4gICAgICAgICAgaWYgKFNjcm9sbE1hbmFnZXIuaXNJbnRlcnNlY3RpbmdWaWV3cG9ydChmaXJzdEl0ZW0pKSB7XG4gICAgICAgICAgICBsZXQgcmF0aW8gPSBTY3JvbGxNYW5hZ2VyLmdldEludGVyc2VjdGlvblJhdGlvKGZpcnN0SXRlbSk7XG4gICAgICAgICAgICBpZiAocmF0aW8gPiAwLjcpIHtcbiAgICAgICAgICAgICAgZmlyc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICB0aGlzLnJvYWRtYXBJbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5yb2FkbWFwQ3VycmVudCsrO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5yb2FkbWFwQmxvY2sgPSB0cnVlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yb2FkbWFwSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMucm9hZG1hcEJsb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0sIDEzMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgIHZhciBjdXJyZW50SXRlbSA9IHRoaXMucm9hZG1hcEl0ZW1zW3RoaXMucm9hZG1hcEN1cnJlbnRdO1xuICAgICAgICAvLyAgIGlmIChTY3JvbGxNYW5hZ2VyLmlzSW50ZXJzZWN0aW5nVmlld3BvcnQoY3VycmVudEl0ZW0pKSB7XG4gICAgICAgIC8vICAgICBsZXQgcmF0aW8gPSBTY3JvbGxNYW5hZ2VyLmdldEludGVyc2VjdGlvblJhdGlvKGN1cnJlbnRJdGVtKTtcbiAgICAgICAgLy8gICAgIGlmIChyYXRpbyA+IDAuMSkge1xuICAgICAgICAvLyAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICAgICAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtY29taW5nJyk7XG4gICAgICAgIC8vICAgICAgIH0sIDEwMCk7XG4gICAgICAgIC8vICAgICAgIHRoaXMucm9hZG1hcEl0ZW1zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAvLyAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgIHRoaXMucm9hZG1hcEN1cnJlbnQrKztcbiAgICAgICAgLy8gICAgICAgdGhpcy5yb2FkbWFwQmxvY2sgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucm9hZG1hcEJsb2NrID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgIH0sIDEzMDApO1xuICAgICAgICAvLyAgICAgICBpZiAodGhpcy5yb2FkbWFwQ3VycmVudCA+PSB0aGlzLnJvYWRtYXBJdGVtcy5sZW5ndGgpe1xuICAgICAgICAvLyAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yb2FkbWFwSW50ZXJ2YWwpO1xuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfSwgMjAwKTtcblxuICAgIC8vIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yb2FkbWFwQXV0b0xhdW5jaC5iaW5kKHRoaXMpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsTWFuYWdlciB7XG5cbiAgc3RhdGljIGdldFNjcm9sbFBvcygpIHtcbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBpc0luVmlld3BvcnQoZWxlbWVudCwgZnJhY3Rpb25WaXNpYmxlID0gMCkge1xuICAgIGlmIChmcmFjdGlvblZpc2libGUgPiAxIHx8IGZyYWN0aW9uVmlzaWJsZSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUHJvYmxlbWUgZGUgcG91cmNlbnRhZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG5cbiAgICBjb25zdCBtYXJnZVkgPSBmcmFjdGlvblZpc2libGUgKiB3aW5kb3dIZWlnaHQ7XG4gICAgY29uc3QgbWFyZ2VYID0gZnJhY3Rpb25WaXNpYmxlICogd2luZG93V2lkdGg7XG5cbiAgICByZXR1cm4gKFxuICAgICAgcmVjdC50b3AgPD0gd2luZG93SGVpZ2h0IC0gbWFyZ2VZXG4gICAgICAmJiByZWN0LmxlZnQgPD0gd2luZG93V2lkdGggLSBtYXJnZVhcbiAgICAgICYmIHJlY3QuYm90dG9tID4gbWFyZ2VZXG4gICAgICAmJiByZWN0LnJpZ2h0ID4gbWFyZ2VYXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBpc0ludGVyc2VjdGluZ1ZpZXdwb3J0KGVsZW1lbnQpIHtcblxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICBcbiAgICBpZiAocmVjdC50b3AgPCB3aW5kb3dIZWlnaHQgJiYgcmVjdC50b3AgPiAtcmVjdC5oZWlnaHQpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEludGVyc2VjdGlvblJhdGlvKGVsZW1lbnQsIHJlbW92ZUhlaWdodCA9IGZhbHNlKSB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICAgIGxldCBkaXN0YW5jZSA9IHJlY3QuaGVpZ2h0ICsgd2luZG93SGVpZ2h0O1xuICAgIGlmIChyZW1vdmVIZWlnaHQpIGRpc3RhbmNlID0gcmVjdC5oZWlnaHQgKyB3aW5kb3dIZWlnaHQgLSByZW1vdmVIZWlnaHQ7XG4gICAgXG4gICAgY29uc3QgcGVyY2VudFRyYXZlbGxlZCA9IChkaXN0YW5jZSAtIHJlY3QuYm90dG9tKSAvIGRpc3RhbmNlO1xuICAgIHJldHVybiBwZXJjZW50VHJhdmVsbGVkO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVhZHkoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4gcmVzb2x2ZShldmVudCkpO1xuICAgIH1cbiAgfSk7XG59XG5sZXQgYnJlYWtwb2ludHNWYWx1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCcmVha3BvaW50c0Zyb21DU1MoKSB7XG4gIGlmICghYnJlYWtwb2ludHNWYWx1ZSkge1xuICAgIGJyZWFrcG9pbnRzVmFsdWUgPSB7fTtcbiAgICBjb25zdCBjc3NCcmVha3BvaW50cyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0tYnJlYWtwb2ludHMnKTtcbiAgICBjc3NCcmVha3BvaW50cy5zcGxpdCgnLCcpLmZvckVhY2goKGNzc0JyZWFrcG9pbnQpID0+IHtcbiAgICAgIGlmIChjc3NCcmVha3BvaW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGNzc0JyZWFrcG9pbnRbMF0gPT09ICcgJykge1xuICAgICAgICAgIGNzc0JyZWFrcG9pbnQgPSBjc3NCcmVha3BvaW50LnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBicmVha3BvaW50SW5mb3MgPSBjc3NCcmVha3BvaW50LnNwbGl0KCcgJyk7XG4gICAgICAgIGJyZWFrcG9pbnRzVmFsdWVbYnJlYWtwb2ludEluZm9zWzBdXSA9IHBhcnNlSW50KGJyZWFrcG9pbnRJbmZvc1sxXSwgMTApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmVha3BvaW50cygpIHtcbiAgaW5pdEJyZWFrcG9pbnRzRnJvbUNTUygpO1xuICByZXR1cm4gYnJlYWtwb2ludHNWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2luZG93TGFyZ2VyKGJyZWFrcG9pbnQpIHtcbiAgY29uc3QgYnJlYWtwb2ludFZhbHVlID0gYnJlYWtwb2ludHMoKVticmVha3BvaW50XTtcblxuICBpZiAoIWJyZWFrcG9pbnRWYWx1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIGNvcnJlc3BvbmRpbmcgYnJlYWtwb2ludCcsIGJyZWFrcG9pbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBicmVha3BvaW50VmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dpbmRvd1NtYWxsZXIoYnJlYWtwb2ludCkge1xuICBjb25zdCBicmVha3BvaW50VmFsdWUgPSBicmVha3BvaW50cygpW2JyZWFrcG9pbnRdO1xuXG4gIGlmICghYnJlYWtwb2ludFZhbHVlKSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gY29ycmVzcG9uZGluZyBicmVha3BvaW50JywgYnJlYWtwb2ludCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgYnJlYWtwb2ludFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEJyZWFrcG9pbnQoKSB7XG4gIGNvbnN0IGN1cnJlbnRCcmVha3BvaW50cyA9IGJyZWFrcG9pbnRzKCk7XG4gIGxldCBjdXJyZW50QnJlYWtwb2ludDtcblxuICBPYmplY3Qua2V5cyhjdXJyZW50QnJlYWtwb2ludHMpLmZvckVhY2goKGJyZWFrcG9pbnQpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiBjdXJyZW50QnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjdXJyZW50QnJlYWtwb2ludDtcbn1cblxuLyoqXG4qIENyZWF0ZSBhIGNvb2tpZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUoY29va2llTmFtZSwgY29va2llVmFsdWUsIGR1cmF0aW9uSW5EYXkpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgZXhwaXJlcy5zZXRUaW1lKHRvZGF5LmdldFRpbWUoKSArIChkdXJhdGlvbkluRGF5ICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICBkb2N1bWVudC5jb29raWUgPSBgJHtjb29raWVOYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChjb29raWVWYWx1ZSl9O2V4cGlyZXM9JHtleHBpcmVzLnRvR01UU3RyaW5nKCl9O3BhdGg9LztgO1xufVxuLyoqXG4qIENoZWNrIGlmIGEgY29va2llIGV4aXN0cywgaWYgeWVzIHJldHVybiBpdHMgdmFsdWVcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKGNvb2tpZU5hbWUpIHtcbiAgY29uc3QgbmFtZSA9IGAke2Nvb2tpZU5hbWV9PWA7XG4gIGNvbnN0IGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcbiAgY29uc3QgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBjID0gY2FbaV07XG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cmVhZHl9IGZyb20gJy4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IFBhZ2VIb21lIGZyb20gJy4vcGFnZXMvaG9tZSc7XG5pbXBvcnQgQXBwZWFyTWFuYWdlciBmcm9tICcuL2FuaW1hdGlvbnMvYXBwZWFyLW1hbmFnZXInO1xuaW1wb3J0IFBhcmFsbGF4TWFuYWdlciBmcm9tICcuL2FuaW1hdGlvbnMvcGFyYWxsYXgtbWFuYWdlcic7XG5cbnJlYWR5KCkudGhlbigoKSA9PiB7XG4gIEFwcGVhck1hbmFnZXIuaW5pdCgpO1xuICBQYXJhbGxheE1hbmFnZXIuaW5pdCgpO1xuICBQYWdlSG9tZS5pbml0KCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=