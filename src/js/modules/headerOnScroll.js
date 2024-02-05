const headerOnScroll = () => {
  const header = document.querySelector('.header');
  if(window.scrollY > 0) {
    header.classList.add('scroll');
  }
  document.addEventListener('scroll', () => {
    if(window.scrollY <= 0) {
      setTimeout(() => {
        header.classList.remove('scroll');
      }, '100');
    } else {
      setTimeout(() => {
        header.classList.add('scroll');
      }, '100');
    }
  });
}

export default headerOnScroll;
