/*! For license information please see 890ac0a8d93fda6bf10fb6edb0af51f32ac93dfd-52e699d12718f1c2a5a0.js.LICENSE.txt */
(self.webpackChunkokp4_website=self.webpackChunkokp4_website||[]).push([[476],{2899:function(e,t,n){"use strict";var r=n(7294),o=n(7732),i=n(9211),a=n(9812);t.Z=e=>{let{children:t,location:n,files:u,breadcrumbs:l,isStatic:s=!1,withDocs:c=!0,withAssociates:f=!0,withPartners:d=!0}=e;return r.createElement(r.Fragment,null,r.createElement(o.Z,null),r.createElement(i.Z,{isPositionFixed:s,breadcrumbs:l}),r.createElement("main",{className:n},t),r.createElement(a.Z,{files:u,withDocs:c,withAssociates:f,withPartners:d}))}},9260:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t),i=r(n);function a(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(c){s=!0,o=c}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function f(e,t){if(null==e)return{};var n,r,o=c(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){return m(e)||a(e,t)||p(e,t)||v()}function m(e){if(Array.isArray(e))return e}function p(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function b(e){var t=g(e,"string");return"symbol"==typeof t?t:String(t)}var h=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],S=function(e,t){var r=e.animationData,a=e.loop,u=e.autoplay,s=e.initialSegment,c=e.onComplete,m=e.onLoopComplete,p=e.onEnterFrame,y=e.onSegmentStart,v=e.onConfigReady,g=e.onDataReady,b=e.onDataFailed,S=e.onLoadedImages,w=e.onDOMLoaded,O=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var A=f(e,h),P=d(n.useState(!1),2),j=P[0],E=P[1],D=n.useRef(),R=n.useRef(null),L=function(){var e;null===(e=D.current)||void 0===e||e.play()},C=function(){var e;null===(e=D.current)||void 0===e||e.stop()},T=function(){var e;null===(e=D.current)||void 0===e||e.pause()},x=function(e){var t;null===(t=D.current)||void 0===t||t.setSpeed(e)},I=function(e,t){var n;null===(n=D.current)||void 0===n||n.goToAndPlay(e,t)},F=function(e,t){var n;null===(n=D.current)||void 0===n||n.goToAndStop(e,t)},k=function(e){var t;null===(t=D.current)||void 0===t||t.setDirection(e)},N=function(e,t){var n;null===(n=D.current)||void 0===n||n.playSegments(e,t)},_=function(e){var t;null===(t=D.current)||void 0===t||t.setSubframe(e)},M=function(e){var t;return null===(t=D.current)||void 0===t?void 0:t.getDuration(e)},V=function(){var e;null===(e=D.current)||void 0===e||e.destroy(),D.current=void 0},Z=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(R.current){null===(t=D.current)||void 0===t||t.destroy();var r=l(l(l({},e),n),{},{container:R.current});return D.current=o.default.loadAnimation(r),E(!!D.current),function(){var e;null===(e=D.current)||void 0===e||e.destroy(),D.current=void 0}}};return n.useEffect((function(){var e=Z();return function(){return null==e?void 0:e()}}),[r,a]),n.useEffect((function(){D.current&&(D.current.autoplay=!!u)}),[u]),n.useEffect((function(){D.current&&(s?Array.isArray(s)&&s.length&&((D.current.currentRawFrame<s[0]||D.current.currentRawFrame>s[1])&&(D.current.currentRawFrame=s[0]),D.current.setSegment(s[0],s[1])):D.current.resetSegments(!0))}),[s]),n.useEffect((function(){var e=[{name:"complete",handler:c},{name:"loopComplete",handler:m},{name:"enterFrame",handler:p},{name:"segmentStart",handler:y},{name:"config_ready",handler:v},{name:"data_ready",handler:g},{name:"data_failed",handler:b},{name:"loaded_images",handler:S},{name:"DOMLoaded",handler:w},{name:"destroy",handler:O}].filter((function(e){return null!=e.handler}));if(e.length){var t=e.map((function(e){var t;return null===(t=D.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=D.current)||void 0===t||t.removeEventListener(e.name,e.handler)}}));return function(){t.forEach((function(e){return e()}))}}}),[c,m,p,y,v,g,b,S,w,O]),{View:i.default.createElement("div",l({style:t,ref:R},A)),play:L,stop:C,pause:T,setSpeed:x,goToAndStop:F,goToAndPlay:I,setDirection:k,playSegments:N,setSubframe:_,getDuration:M,destroy:V,animationContainerRef:R,animationLoaded:j,animationItem:D.current}};function w(e){var t=e.getBoundingClientRect(),n=t.top,r=t.height;return(window.innerHeight-n)/(window.innerHeight+r)}function O(e,t,n){var r=e.getBoundingClientRect(),o=r.top;return{x:(t-r.left)/r.width,y:(n-o)/r.height}}var A=function(e){var t=e.wrapperRef,r=e.animationItem,o=e.mode,i=e.actions;n.useEffect((function(){var e=t.current;if(e&&r&&i.length){r.stop();var n=function(){var t=null,n=function(){var n=w(e),o=i.find((function(e){var t=e.visibility;return t&&n>=t[0]&&n<=t[1]}));if(o){if("seek"===o.type&&o.visibility&&2===o.frames.length){var a=o.frames[0]+Math.ceil((n-o.visibility[0])/(o.visibility[1]-o.visibility[0])*o.frames[1]);r.goToAndStop(a-r.firstFrame-1,!0)}"loop"===o.type&&(null===t||t!==o.frames||r.isPaused)&&(r.playSegments(o.frames,!0),t=o.frames),"play"===o.type&&r.isPaused&&(r.resetSegments(!0),r.play()),"stop"===o.type&&r.goToAndStop(o.frames[0]-r.firstFrame-1,!0)}};return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}},a=function(){var t=function(t,n){var o=t,a=n;if(-1!==o&&-1!==a){var u=O(e,o,a);o=u.x,a=u.y}var l=i.find((function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?o>=t.x[0]&&o<=t.x[1]&&a>=t.y[0]&&a<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&o===t.x&&a===t.y}));if(l){if("seek"===l.type&&l.position&&Array.isArray(l.position.x)&&Array.isArray(l.position.y)&&2===l.frames.length){var s=(o-l.position.x[0])/(l.position.x[1]-l.position.x[0]),c=(a-l.position.y[0])/(l.position.y[1]-l.position.y[0]);r.playSegments(l.frames,!0),r.goToAndStop(Math.ceil((s+c)/2*(l.frames[1]-l.frames[0])),!0)}"loop"===l.type&&r.playSegments(l.frames,!0),"play"===l.type&&(r.isPaused&&r.resetSegments(!1),r.playSegments(l.frames)),"stop"===l.type&&r.goToAndStop(l.frames[0],!0)}},n=function(e){t(e.clientX,e.clientY)},o=function(){t(-1,-1)};return e.addEventListener("mousemove",n),e.addEventListener("mouseout",o),function(){e.removeEventListener("mousemove",n),e.removeEventListener("mouseout",o)}};switch(o){case"scroll":return n();case"cursor":return a()}}}),[o,r])},P=function(e){var t=e.actions,n=e.mode,r=e.lottieObj,o=r.animationItem,i=r.View,a=r.animationContainerRef;return A({actions:t,animationItem:o,mode:n,wrapperRef:a}),i},j=["style","interactivity"],E=function(e){var t,r,o,i=e.style,a=e.interactivity,u=f(e,j),l=S(u,i),s=l.View,c=l.play,d=l.stop,m=l.pause,p=l.setSpeed,y=l.goToAndStop,v=l.goToAndPlay,g=l.setDirection,b=l.playSegments,h=l.setSubframe,w=l.getDuration,O=l.destroy,A=l.animationContainerRef,E=l.animationLoaded,D=l.animationItem;return n.useEffect((function(){e.lottieRef&&(e.lottieRef.current={play:c,stop:d,pause:m,setSpeed:p,goToAndPlay:v,goToAndStop:y,setDirection:g,playSegments:b,setSubframe:h,getDuration:w,destroy:O,animationContainerRef:A,animationLoaded:E,animationItem:D})}),[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),P({lottieObj:{View:s,play:c,stop:d,pause:m,setSpeed:p,goToAndStop:y,goToAndPlay:v,setDirection:g,playSegments:b,setSubframe:h,getDuration:w,destroy:O,animationContainerRef:A,animationLoaded:E,animationItem:D},actions:null!==(r=null==a?void 0:a.actions)&&void 0!==r?r:[],mode:null!==(o=null==a?void 0:a.mode)&&void 0!==o?o:"scroll"})};Object.defineProperty(e,"LottiePlayer",{enumerable:!0,get:function(){return o.default}}),e.default=E,e.useLottie=S,e.useLottieInteractivity=P,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(1248),n(7294))}}]);