import { footer } from '../../components/footer';
import { headerSobre } from '../../components/headerSobre';

import imgSarah from '../../../../public/img/sarah.jpg';
import imgDaiane from '../../../../public/img/daiane.jpg';
import imgGithub from '../../../../public/img/github.svg';
import imgLinkedin from '../../../../public/img/linkedin.svg';

export default () => {
  const containerSobre = document.createElement('div');
  const templateSobre = `
  <div class="container-sobre">
   <p>Desenvolvido por Daiane dos Anjos e Sarah Rodrigues, o Olá devas é uma rede social para uso exclusivo de mulheres do setor tecnológico.
   Com o intuíto de reduzir a desigualdade de gênero no setor, o olá Devas foi criado para facilitar a procura de vagas.
   Nela a usuária poderá criar uma conta de acesso, logar-se com ela, criar, editar, deletar e dar likes em publicações.</p> 

  <h1>Desenvolvedoras</h1>
<div class='cardContainer'>
<div class="cardItem">

<ul>
<li class= "title">Daiane dos Anjos</li>
<li><a href="https://github.com/daianedosanjos?tab=repositories">
<img class="card-img" src="${imgDaiane}" alt="foto de Daiane"></a> </li>
<div class="redes">
<li><a href="https://github.com/daianedosanjos?tab=repositories" target="_blank"><img class="link-img" src="${imgGithub}">
           </a> </li>
<li><a href="https://www.linkedin.com/in/daianeanjos" target="_blank"><img class="link-img" src="${imgLinkedin}">
           </a> </li></div>
</ul>
</div>
<div class="cardItem">
<ul>
<li class= "title">Sarah Rodrigues</li>
<li><a href="https://github.com/s2arahrv?tab=repositories">
<img class="card-img" src="${imgSarah}" alt="foto de Sarah">
</a> </li>
<div class="redes">
<li><a href="https://github.com/s2arahrv" target="_blank"><img class="link-img" src="${imgGithub}"></a> </li>
<li><a href="https://www.linkedin.com/in/sarah-rodrigues-251396270/s" target="_blank"><img class="link-img" src="${imgLinkedin}">
           </a> </li> </div>
</ul>
</div>
</div>
 </div>
  `;

  containerSobre.append(headerSobre());
  containerSobre.append(footer());

  containerSobre.innerHTML += templateSobre;
  return containerSobre;
};
