import {ready} from './utils/utils';
import PageHome from './pages/home';
import AppearManager from './animations/appear-manager';
import ParallaxManager from './animations/parallax-manager';
import HeaderManager from './animations/header-manager';

ready().then(() => {
  AppearManager.init();
  ParallaxManager.init();
  HeaderManager.init();
  PageHome.init();
});