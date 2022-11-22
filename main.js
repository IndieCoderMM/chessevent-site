const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');
const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-menu a');

const DISPLAY_MENU = 'mobile-menu';
const FIXED_POS = 'fixed-position';
const CLOSE_ICON = '<i class="fa-regular fa-circle-xmark"></i>';
const MENU_ICON = '<i class="fa-solid fa-bars"></i>';

const isMenuOpen = () => navContainer.classList.contains(DISPLAY_MENU);

function toggleMobileMenu() {
  navContainer.classList.toggle(DISPLAY_MENU);
  body.classList.toggle(FIXED_POS);
  if (isMenuOpen()) {
    menuBtn.innerHTML = CLOSE_ICON;
    body.classList.add(FIXED_POS);
  } else {
    menuBtn.innerHTML = MENU_ICON;
    body.classList.remove(FIXED_POS);
  }
}

menuBtn.addEventListener('click', toggleMobileMenu);

navItems.forEach((item) =>
  item.addEventListener('click', () => {
    if (isMenuOpen()) {
      toggleMobileMenu();
    }
  })
);
