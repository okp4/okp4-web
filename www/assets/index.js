(()=>{"use strict";class t{static getScrollPos(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}static isInViewport(t,e=0){if(e>1||e<0)throw new Error("Probleme de pourcentage");const i=t.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,a=window.innerWidth||document.documentElement.clientWidth,s=e*n,o=e*a;return i.top<=n-s&&i.left<=a-o&&i.bottom>s&&i.right>o}static isIntersectingViewport(t){const e=t.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight;return window.innerWidth||document.documentElement.clientWidth,e.top<i&&e.top>-e.height}static getIntersectionRatio(t,e=!1){const i=t.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;window.innerWidth||document.documentElement.clientWidth;let a=i.height+n;return e&&(a=i.height+n-e),(a-i.bottom)/a}}class e{static init(){this.initHoverLanding(),this.initParallaxLanding(),this.initStickyUniverse(),this.initRoadmap(),this.defaultScrollY=window.scrollY,this.scrollMonitor=setInterval(this.scrollStarted.bind(this),300)}static initHoverLanding(){this.landing=document.querySelector("section.landing"),this.haloLandingContainer=this.landing.querySelector(".hoverLanding"),this.haloLanding=this.landing.querySelector(".hoverLanding .haloLanding"),this.landing&&(this.landing.addEventListener("mouseenter",(t=>{this.hoverLanding(event,"enter")})),this.landing.addEventListener("mouseleave",(t=>{this.hoverLanding(event,"leave")})),this.landing.addEventListener("mousemove",(t=>{this.hoverLanding(event,"move")})))}static hoverLanding(t,e){"enter"==e&&this.haloLandingContainer.classList.add("is-active"),"leave"==e&&this.haloLandingContainer.classList.remove("is-active"),"move"==e&&setTimeout((()=>{let e="translate3d("+t.pageX+"px, "+t.pageY+"px, 0)";this.haloLanding.style.transform=e}),100)}static initParallaxLanding(){this.landingParallax=document.querySelectorAll("[data-parallax-landing]"),this.parallaxLanding()}static parallaxLanding(){this.landingParallax.forEach((e=>{if(t.isIntersectingViewport(e)){const i=e.dataset.parallaxEnd,n=window.innerHeight||document.documentElement.clientHeight;let a;a="1"==e.dataset.parallaxAlready?t.getIntersectionRatio(e,n):t.getIntersectionRatio(e);let s="translate3d(0, "+a.toFixed(4)*i+"px, 0)";e.style.transform=s}})),window.requestAnimationFrame(this.initParallaxLanding.bind(this))}static initStickyUniverse(){this.universeSection=document.querySelector("section.universe");const t=this.universeSection.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight;let i=-(t.height-e)-250+"px";this.universeSection.style.top=i}static initRoadmap(){this.roadmapItems=document.querySelectorAll(".roadmap__item"),this.roadmapInit=!1,this.roadmapCurrent=0,this.roadmapItems.forEach(((t,e)=>{let i=e+1,n=t.offsetHeight+50+"px",a="--roadmap-item"+i;document.documentElement.style.setProperty(a,n),t.classList.remove("is-active"),t.addEventListener("click",(e=>{t.classList.contains("is-active")||(setTimeout((function(){t.classList.remove("is-coming")}),100),this.roadmapItems.forEach(((t,e)=>{t.classList.remove("is-active")}))),t.classList.toggle("is-active")}))})),this.roadmapAutoLaunch()}static async roadmapAutoLaunch(){this.roadmapInterval,this.roadmapBlock=!1,this.roadmapInterval=setInterval((()=>{if(!this.roadmapBlock&&!this.roadmapInit){var e=this.roadmapItems[this.roadmapCurrent];t.isIntersectingViewport(e)&&t.getIntersectionRatio(e)>.5&&(e.classList.add("is-active"),this.roadmapInit=!0,this.roadmapCurrent++,this.roadmapBlock=!0,setTimeout((()=>{clearInterval(this.roadmapInterval),this.roadmapBlock=!1}),1300))}}),200)}static scrollStarted(){window.scrollY>30&&this.defaultScrollY!=window.scrollY&&(clearInterval(this.scrollMonitor),document.querySelector(".landing__bottom").classList.add("scrollStarted"))}}class i{static init(){this.initReveal()}static initReveal(){this.intersectionAppear,this.optionsAppear={root:null,rootMargin:"0px",threshold:this.buildThresholdListAnims(1e4)},this.createIntersectionObs()}static createIntersectionObs(){var t=document.querySelectorAll("[data-reveal]:not(.is-in-view)"),e=document.querySelectorAll("[data-reveal-custom]:not(.is-in-view)");(t||e)&&(this.intersectionAppear=new IntersectionObserver(this.handleAppear.bind(this),this.optionsAppear)),t&&t.forEach((t=>{this.intersectionAppear.observe(t)})),e&&e.forEach((t=>{this.intersectionAppear.observe(t)}))}static handleAppear(t,e){t.forEach((t=>{t.isIntersecting&&(t.target.classList.contains("is-in-view")||(t.target.classList.add("is-in-view"),(t.target.dataset.revealCustom||t.target.dataset.reveal)&&this.intersectionAppear.unobserve(t.target)))}))}static buildThresholdListAnims(t){for(var e=[],i=1;i<=t;i++){var n=i/t;e.push(n)}return e.push(0),e}}class n{static init(){this.handleParallax()}static handleParallax(){this.elemsParallax=document.querySelectorAll("[data-parallax]"),this.elemsParallax.forEach((e=>{if(t.isIntersectingViewport(e)){const i=e.dataset.parallax;let n="translate3d(0, "+t.getIntersectionRatio(e).toFixed(4)*i+"px, 0)";e.style.transform=n}})),window.requestAnimationFrame(this.handleParallax.bind(this))}}new Promise((t=>{(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",(e=>t(e)))})).then((()=>{i.init(),n.init(),e.init()}))})();