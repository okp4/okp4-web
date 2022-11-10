export default class AppearManager {

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
