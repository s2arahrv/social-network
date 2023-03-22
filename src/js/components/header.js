export function header() {
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header-container');

  const templateHeader = `
<section class="logo">
<img class="img-header" src="./img/Captura de tela 2023-03-08 125923.png" alt=""></section>
<div class="header">
<p>Olá Deva! Seja bem vinda, esta comunidade foi criada com o objetivo de conectar você com as vagas de emprego disponiveis na área da tecnologia.</p>
<img src="./img/dev.svg" width="120px" alt="">
</div>
`;

  containerHeader.innerHTML = templateHeader;

  return containerHeader;
}
