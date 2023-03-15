const menu = document.querySelector('.menu_list');
const menuItems = document.querySelectorAll('.link_item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menuIcon = document.querySelector('.open');
const speackerCards = document.getElementById('speakers_cards');
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    hamburger.classList.remove('closingIcon');
    document.body.classList.remove('hide_y_scroll');
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    hamburger.classList.add('closingIcon');
    document.body.classList.add('hide_y_scroll');
  }
}

hamburger.addEventListener('click', toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

const speackersData = [
  {
    classes: 'shown',
    name: 'Tame Impala',
    subtitle: 'Artist',
    img: './pictures/tame-impala.jpg',
    desc: 'Tame Impala is the psychedelic music project of Australian multi-instrumentalist Kevin Parker. In the recording studio.',
  },
  {
    classes: 'shown',
    name: 'Dua Lipa',
    subtitle: 'Artist',
    img: './pictures/dua-lipa.jpeg',
    desc: 'Our other British star Dua Lipa has recently shown who she is and there is no one who doesn’t know her.',
  },
  {
    classes: 'hidden',
    name: 'Arctic Monkeys',
    subtitle: 'Artist',
    img: './pictures/arctic-monkeys.jpg',
    desc: 'The British indie rock band Arctic Monkeys has finally returned to the festival stages. In the United Kingdom, the band.',
  },
  {
    classes: 'hidden',
    name: 'Calvin Harris',
    subtitle: 'Artist',
    img: './pictures/calvin-harris.jpg',
    desc: 'Calvin Harris has made many hits with big names. Dua Lipa, Rag’n’Bone Man, Katy Perry, Ariana Grande and we could go on and on.',
  },
  {
    classes: 'hidden',
    name: 'Kings of Leon',
    subtitle: 'Artist',
    img: './pictures/kings-of-leon.jpg',
    desc: 'The 3 brothers of Kings of Leon have worked very hard the last few years.',
  },
  {
    classes: 'hidden',
    name: 'Justin Bieber',
    subtitle: 'Artist',
    img: './pictures/justin-bieber.jpg',
    desc: 'Justin Bieber will perform at Sziget 2022. This is quite unique, since Justin Bieber normally does tours.',
  },
];

function displayCard() {
  let allCards = '';
  speackersData.forEach((speacker) => {
    allCards = `${allCards} <article class="card_speaker ${speacker.classes}">
              <img class="portrait" src="${speacker.img}" alt="speacker_image">
              <div class="information">
                  <h5 class="name">${speacker.name}</h5>
                  <p class="subtitle">${speacker.subtitle}</p>
                  <hr class="grey_bar">
                  <p class="description">${speacker.desc}.</p>
              </div>
            </article>
                        `;
  });
  speackerCards.innerHTML = allCards;
}
displayCard();
