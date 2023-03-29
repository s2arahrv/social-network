import { getUser } from '../../firebase/auth.js';

export function headerFeed() {
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header-container');

  const templateHeader = `
  <section class="logo">
  <img class="img-header" src="./img/Captura de tela 2023-03-08 125923.png" alt="">
  </section>
  <div class="header">
  <p>Bem-Vinda, ${getUser().displayName}!</p>
  <img src="./img/dev.svg" width="120px" alt="">
 </div>
  `;

  containerHeader.innerHTML = templateHeader;

  return containerHeader;
}
