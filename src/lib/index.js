import login from '../js/pages/login/login.js';
import register from '../js/pages/register/register';
import feed from '../js/pages/feed/feed.js';
import profile from '../js/pages/profile/profile.js';
import publish from '../js/pages/publish/publish.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case ' ':
        main.appendChild(login());
        break;
      case '#register':
        main.appendChild(register());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      case '#profile':
        main.appendChild(profile());
        break;
      case '#publish':
        main.appendChild(publish());
        break;
      case '#sair':
        main.appendChild(login());
        break;
      default:
        main.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});
