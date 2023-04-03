import imgHeader from '../../../public/img/header.png';

export function headerSobre() {
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header-container');

  const templateHeader = `
  <section class="logo-sobre">
  <img class="img-header" src="${imgHeader}" alt="">
  </section>
  <div class="header-sobre">
  <h1>
  Saiba mais sobre o Olá Devas!
 </h1>
  </div>
  `;

  containerHeader.innerHTML = templateHeader;

  return containerHeader;
}
