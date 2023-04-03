import { getUser } from '../../firebase/auth.js';
import imgHeader from '../../../public/img/header.png';

export function headerFeed() {
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header-container');

  const templateHeader = `
  <section class="logo-feed">
  <img class="img-header" src="${imgHeader}" alt="">
  </section>
  <div class="header-feed">
  <p>Bem-Vinda, <strong> ${getUser().displayName}! <strong></p>
 </div>
  `;

  containerHeader.innerHTML = templateHeader;

  return containerHeader;
}
