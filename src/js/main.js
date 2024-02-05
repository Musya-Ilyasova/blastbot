import addMenu from './modules/menu';
import headerOnScroll from './modules/headerOnScroll';
import scrollToTheSection from './modules/scrollToTheSection';

document.addEventListener("DOMContentLoaded",  () => {
  addMenu();
  headerOnScroll();
  scrollToTheSection();
});

