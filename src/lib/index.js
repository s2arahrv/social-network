import login from '../js/pages/login/login.js';
import register from '../js/pages/register/register';
import publish from '../js/pages/publish/publish.js';
import { redirect } from '../redirect.js';

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
      case '#publish':
        main.append(publish());
        break;
      case '#sair':
        main.append(login());
        break;
      default:
        main.append(login());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  redirect('');
  init();
});
