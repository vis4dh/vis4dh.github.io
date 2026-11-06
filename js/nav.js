// Single source of truth for the site navigation.
// Each page includes <script src="js/nav.js"></script> where the nav should appear.
(function () {
  const pages = [
    ['cfp.html', 'CfP'],
    ['schedule.html', 'Schedule'],
    ['invitedtalks.html', 'Capstone'],
    ['accepted.html', 'Accepted Contributions'],
    ['committee.html', 'Organizers'],
    ['paperarchive.html', 'Past Papers'],
    ['labtalks.html', 'VIS4DH Labs'],
    ['archives.html', 'Archives'],
  ];

  const current = location.pathname.split('/').pop() || 'index.html';
  const link = (href, label) =>
    `<a class="c-navigation__item${href === current ? ' is-active' : ''}" href="${href}">${label}</a>`;

  document.currentScript.insertAdjacentHTML('afterend', `
    <nav class="c-navigation c-menu">
      <div class="persistent-menu">
        ${link('index.html', '#VIS4DH2027')}
        <a class="menu-button" href="#">Menu</a>
      </div>
      <div class="menu">
        ${pages.map(([href, label]) => link(href, label)).join('\n        ')}
      </div>
    </nav>`);

  const nav = document.querySelector('.c-menu');
  nav.querySelector('.menu-button').addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('menu-show');
  });
})();
