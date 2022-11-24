const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');
const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-menu a');
const featureGrid = document.querySelector('#feature-grid');

const DISPLAY_MENU = 'mobile-menu';
const FIXED_POS = 'fixed-position';
const CLOSE_ICON = '<i class="fa-solid fa-xmark"></i>';
const MENU_ICON = '<i class="fa-solid fa-bars"></i>';

const playersList = [
  {
    name: 'Magnus Calsen',
    title: 'Grandmaster (2859)',
    bio: 'Carlsen, a Norwegian grandmaster, is the five-time World Chess Champion and has been remarked as the greatest of all time.',
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
    bio: 'Fabiano, an Italian-American grandmaster, is a chess prodigy who became a grandmaster at the age of 14.',
    profile: 'img/fabiano.jpg',
  },
  {
    name: 'Wesley So',
    title: 'Grandmaster (2763)',
    bio: 'Wesley is a Filipino-American grandmaster and the number two player in the world behind Magnus Calsen.',
    profile: 'img/wesley.jpg',
  },
  {
    name: 'Anish Giri',
    title: 'Grandmaster (2764)',
    bio: 'Anish Giri, a Russian-born Dutch grandmaster, has been ranked as the number three player in the world.',
    profile: 'img/giri.jpg',
  },
];

function makeElement(tag, classList, text = '') {
  const elem = document.createElement(tag);
  classList.forEach((className) => elem.classList.add(className));
  if (text !== '') elem.textContent = text;
  return elem;
}

function getPlayerCard(player) {
  const card = makeElement('section', ['player-card', 'col-md-5']);
  const imgContainer = makeElement('div', ['img-container']);
  const profileImg = makeElement('img', ['profile-pic']);
  const infoSection = makeElement('section', ['player-info']);
  const name = makeElement('h3', ['player-name'], player.name);
  const title = makeElement('h4', ['player-title'], player.title);
  const divider = makeElement('hr', ['info-divider']);
  const bio = makeElement('p', ['player-bio'], player.bio);

  profileImg.setAttribute('src', player.profile);
  profileImg.setAttribute('alt', player.name);
  imgContainer.appendChild(profileImg);
  infoSection.appendChild(name);
  infoSection.appendChild(title);
  infoSection.appendChild(divider);
  infoSection.appendChild(bio);
  card.appendChild(imgContainer);
  card.appendChild(infoSection);

  return card;
}

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

// DOM manipulation
if (featureGrid !== null) {
  playersList.forEach((player) => {
    const playerCard = getPlayerCard(player);
    featureGrid.appendChild(playerCard);
  });
}

menuBtn.addEventListener('click', toggleMobileMenu);

navItems.forEach((item) => item.addEventListener('click', () => {
  if (isMenuOpen()) {
    toggleMobileMenu();
  }
}));
