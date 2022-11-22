const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');
const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-menu a');
const featureGrid = document.querySelector('#feature-grid');

const DISPLAY_MENU = 'mobile-menu';
const FIXED_POS = 'fixed-position';
const CLOSE_ICON = '<i class="fa-regular fa-circle-xmark"></i>';
const MENU_ICON = '<i class="fa-solid fa-bars"></i>';

const playersList = [
  {
    name: 'Magnus Calsen',
    title: 'Grandmaster (2859)',
    bio: 'Carlsen is a Norwegian chess grandmaster who is the reigning five-time World Chess Champion.',
    profile: 'img/magnus.jpg',
  },
  {
    name: 'Hikaru Nakamura',
    title: 'Grandmaster (2768)',
    bio: 'Hikaru is a Japanese-American grandmaster, streamer and five-time U.S. Chess Champion.',
    profile: 'img/hikaru.jpg',
  },
  {
    name: 'Ian Nepomniachtchi',
    title: 'Grandmaster (2793)',
    bio: 'Nepo is a Russian grandmaster who challenged GM Magnus Calsen for the 2021 World Championship.',
    profile: 'img/nepo.jpeg',
  },
  {
    name: 'Fabiano Caruana',
    title: 'Grandmaster (2766)',
    bio: 'Fabiano, an Italian-American grandmaster, is a chess prodigy who became a grandmaster at 14.',
    profile: 'img/fabiano.jpg',
  },
];

const isMenuOpen = () => navContainer.classList.contains(DISPLAY_MENU);

function makeElement(tag, classList, text = '') {
  const elem = document.createElement(tag);
  classList.forEach((className) => elem.classList.add(className));
  if (text !== '') elem.textContent = text;
  return elem;
}

function makePlayerCard(player) {
  const card = makeElement('section', ['player-card', 'col-md-5']);
  const imgContainer = makeElement('div', ['img-container']);
  const profileImg = makeElement('img', ['profile-pic']);
  const infoSection = makeElement('section', ['player-info']);
  const name = makeElement('h3', ['player-name'], player.name);
  const title = makeElement('h4', ['player-title'], player.title);
  const bio = makeElement('p', ['player-bio'], player.bio);

  profileImg.setAttribute('src', player.profile);
  imgContainer.appendChild(profileImg);
  infoSection.appendChild(name);
  infoSection.appendChild(title);
  infoSection.appendChild(bio);
  card.appendChild(imgContainer);
  card.appendChild(infoSection);

  return card;
}

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

// DOM manipulation

playersList.forEach((player) => {
  const playerCard = makePlayerCard(player);
  featureGrid.appendChild(playerCard);
});

menuBtn.addEventListener('click', toggleMobileMenu);

navItems.forEach((item) =>
  item.addEventListener('click', () => {
    if (isMenuOpen()) {
      toggleMobileMenu();
    }
  })
);
