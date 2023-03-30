import { footer } from '../../components/footer';
import { header } from '../../components/header';

export default () => {
  const containerSobre = document.createElement('div');
  const templateSobre = `
  <div class="container-sobre">
  <h1>
   Saiba mais sobre o Olá Devas!
  </h1>
  <p>Desenvolvido por Daiane dos Anjos e Sarah Rodrigues, o Olá devas é uma rede social para uso exclusivo de mulheres do setor tecnológico
  Com o intuíto de diminuir o gap entre homens x mulheres no setor, o olá Devas, foi criado para facilitar a procura de vagas.
  Nela a usuária poderá criar uma conta de acesso, logar-se com ela, criar, editar, deletar e dar likes em publicações.</p> 
 </div>
  `;

  containerSobre.append(header());
  containerSobre.append(footer());

  containerSobre.innerHTML += templateSobre;
  return containerSobre;
};
