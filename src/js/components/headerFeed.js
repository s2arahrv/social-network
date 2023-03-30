import { getUser } from '../../firebase/auth.js';

export function headerFeed() {
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header-container');

  const templateHeader = `
  <section class="logo-feed">
  <img class="img-header-feed" src="./img/Captura de tela 2023-03-08 125923.png" alt="">
  </section>
  <div class="header-feed">
  <p>Bem-Vinda, <strong> ${getUser().displayName}! <strong></p>
 </div>
  `;

  containerHeader.innerHTML = templateHeader;

  return containerHeader;
}
