import { footer } from '../../components/footer';
import { headerSobre } from '../../components/headerSobre';

export default () => {
  const containerSobre = document.createElement('div');
  const templateSobre = `
  <div class="container-sobre">
   <p>Desenvolvido por <a class='link' href="https://github.com/daianedosanjos?tab=repositories" target="_blank"> Daiane dos Anjos</a> e  <a href="https://github.com/s2arahrv?tab=repositories" target="_blank"> Sarah Rodrigues</a>, o Olá devas é uma rede social para uso exclusivo de mulheres do setor tecnológico.
  Com o intuíto de diminuir o gap entre homens x mulheres no setor, o Olá Devas foi criado para facilitar a procura de vagas.
  Nela a usuária poderá criar uma conta de acesso, logar-se com ela, criar, editar, deletar e dar likes em publicações.</p> 

  <h1>Desenvolvedoras</h1>
<div class='cardContainer'>
<div class="cardItem">
<a href="https://github.com/daianedosanjos?tab=repositories">
<img class="card-img" src="./img/daiane.jpg" alt="foto de Daiane"></a> 

<ul>
<li class= "title">Daiane dos Anjos</li>
<li><a href="https://github.com/daianedosanjos?tab=repositories" target="_blank"><img class="link-img" src="./img/github.svg">
           </a> </li>
<li><a href="https://www.linkedin.com/in/daianeanjos" target="_blank"><img class="link-img" src="./img/linkedin.png">
           </a> </li>
</ul>
</div>
<div class="cardItem">
<a href="https://github.com/daianedosanjos?tab=repositories">
<img class="card-img" src="./img/sarah.jpg" alt="foto de Sarah">
</a> 

<ul>
<li class= "title">Sarah Rodrigues</li>
<li><a href="https://github.com/s2arahrv" target="_blank"><img class="link-img" src="./img/github.svg"></a> </li>
<li><a href="https://www.linkedin.com/in/sarah-rodrigues-251396270/s" target="_blank"><img class="link-img" src="./img/linkedin.png">
           </a> </li>
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
