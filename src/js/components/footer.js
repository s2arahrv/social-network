import { disconnect } from '../../firebase/auth';
import { redirect } from '../../redirect';

export function footer() {
  const containerFooter = document.createElement('footer');
  containerFooter.classList.add('footer-global');

  const templateFooter = `
<nav id="footer">
  <ul>
    <div class="li">
      <li>
         <a href="/#profile">
          <img src="./img/user-square.svg" alt="">
           <p class="text">Perfil</p>
         </a>
      </li>
    </div>
    <div class="li">
      <li>       
        <a href="/#publish">
          <img src="./img/plus-square.svg" alt="">
          <p class="text">Publicar</p>
        </a>
      </li>
    </div>
    <div class="li">
      <li>       
        <a href="/#feed">
          <img src="./img/house.svg" alt="">
          <p class="text">Feed</p>
        </a>
      </li>
    </div>
    <div class="li">
      <li>      
        <a href="/#sair">
          <img src="./img/sign-out.svg" alt="">
          <p id='sair'class="text">Sair</p>
        </a>
      </li>
    </div>
  </ul>
</nav>`;

  containerFooter.innerHTML = templateFooter;

  const btnDisconnect = containerFooter.querySelector('#sair');
  btnDisconnect.addEventListener('click', async () => {
    await disconnect();
    redirect('#login');
  });

  return containerFooter;
}
