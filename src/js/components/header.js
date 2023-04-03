import imgHeader from '../../../public/img/header.png';

export function header() {
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header-container');

  const templateHeader = `
<section class="logo">
<img class="img-header" src="${imgHeader}" alt="">
</section>
<div class="header">
<p>Olá Deva! Seja bem vinda, esta comunidade foi criada com o objetivo de conectar você com as vagas de emprego disponiveis na área da tecnologia.</p>
</div>
`;

  containerHeader.innerHTML = templateHeader;

  return containerHeader;
}
