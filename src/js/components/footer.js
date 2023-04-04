import { disconnect } from '../../firebase/auth';
import { redirect } from '../../redirect';

import userSquare from '../../../public/img/user-square.svg';
import house from '../../../public/img/house.svg';
import SignOut from '../../../public/img/sign-out.svg';

export function footer() {
  const containerFooter = document.createElement('footer');
  containerFooter.classList.add('footer-global');

  const templateFooter = `
<nav id="footer">
  <ul>
     <li class="li">
         <a id='sobre' href="/#sobre">
          <img src="${userSquare}" alt="">
           <p class="text">Sobre</p>
         </a>
      </li>
    
      <li class="li">
         <a href="/#feed">
          <img src="${house}" alt="">
           <p class="text">Feed</p>
         </a>
      </li>
       
   
      <li class="li">      
        <a href="/#sair">
          <img src="${SignOut}" alt="">
          <p id='sair'class="text">Sair</p>
        </a>
      </li>
   
  </ul>
</nav>`;

  containerFooter.innerHTML = templateFooter;

  const btnDisconnect = containerFooter.querySelector('#sair');
  btnDisconnect.addEventListener('click', () => {
    disconnect();
    redirect('#login');
  });

  const sobre = containerFooter.querySelector('#sobre');
  sobre.addEventListener('click', () => {
    redirect('#sobre');
  });

  return containerFooter;
}
