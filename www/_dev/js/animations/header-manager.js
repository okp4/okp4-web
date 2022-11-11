import {isWindowSmaller} from '../utils/utils';

export default class HeaderManager {
  static init() {
    if (isWindowSmaller('lg')) {
      this.header = document.querySelector('header.mainHeader');
      this.headerToggler = this.header.querySelector('.burger');
      this.headerToggler.addEventListener('click', (event) => {
        this.header.classList.toggle('is-active');
      });
    }
  }
}
