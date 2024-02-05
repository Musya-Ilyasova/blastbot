import addMenu from './modules/menu';
import headerOnScroll from './modules/headerOnScroll';
import scrollToTheSection from './modules/scrollToTheSection';
import wow from './modules/animated';
import customVh from './modules/customVh'

document.addEventListener("DOMContentLoaded",  () => {
  addMenu();
  headerOnScroll();
  scrollToTheSection();
  wow.init();
  customVh();
});

