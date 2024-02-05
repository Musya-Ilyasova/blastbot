const menuClose = (menu, burger) => {
  menu.classList.remove('show');
  document.body.style.overflow = '';
  burger.classList.remove('burger_close');
}

const menuOpen = (menu, burger) => {
  menu.classList.add('show');
  document.body.style.overflow = 'hidden';
  burger.classList.add('burger_close');
}

const toggleBurger = (selectorBurger, menu) => {
  const burger = document.querySelector(selectorBurger);
  burger.addEventListener('click', () => {
    if(burger.classList.contains('burger_close')) {
      menuClose(menu, burger);
    } else {
      menuOpen(menu, burger);
    }
  })
}
const addMenu = () => {
  const menu = document.querySelector('.menu__wrapper');
  let overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.prepend(overlay);
  toggleBurger('.burger', menu);
}

export default addMenu;
