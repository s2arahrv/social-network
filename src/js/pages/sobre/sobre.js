import { footer } from '../../components/footer';
import { headerSobre } from '../../components/headerSobre';

export default () => {
  const containerSobre = document.createElement('div');
  const templateSobre = `
  <div class="container-sobre">
   <p>Desenvolvido por <a class='link' href="https://github.com/daianedosanjos?tab=repositories" target="_blank"> Daiane dos Anjos</a> e  <a href="https://github.com/s2arahrv?tab=repositories" target="_blank"> Sarah Rodrigues</a>, o Olá devas é uma rede social para uso exclusivo de mulheres do setor tecnológico
  Com o intuíto de diminuir o gap entre homens x mulheres no setor, o olá Devas, foi criado para facilitar a procura de vagas.
  Nela a usuária poderá criar uma conta de acesso, logar-se com ela, criar, editar, deletar e dar likes em publicações.</p> 
 </div>
  `;

  containerSobre.append(headerSobre());
  containerSobre.append(footer());

  containerSobre.innerHTML += templateSobre;
  return containerSobre;
};
