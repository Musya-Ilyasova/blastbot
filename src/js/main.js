import addMenu from './modules/menu';
import headerOnScroll from './modules/headerOnScroll';
import scrollToTheSection from './modules/scrollToTheSection';
import wow from './modules/animated';
import customVh from './modules/customVh';
import checkLeaderboardName from './modules/checkLeaderboardName';

document.addEventListener("DOMContentLoaded",  () => {
  addMenu();
  headerOnScroll();
  wow.init();
  customVh();

  if(document.body.classList.contains('index')) {
    scrollToTheSection();
  }
  if(document.body.classList.contains('leaderboard-page')) {
    checkLeaderboardName();
    document.querySelector('[href*="leaderboard"]').classList.add('active');

  }
});

