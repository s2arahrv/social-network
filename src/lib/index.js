import login from '../js/pages/login/login.js';
import register from '../js/pages/register/register';
import feed from '../js/pages/feed/feed.js';
import sobre from '../js/pages/sobre/sobre.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case ' ':
        main.append(login());
        break;
      case '#register':
        main.append(register());
        break;
      case '#feed':
        main.append(feed());
        break;
      case '#sair':
        main.append(login());
        break;
      case '#sobre':
        main.append(sobre());
        break;
      default:
        main.append(login());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  window.location.hash = '';
  init();
});
