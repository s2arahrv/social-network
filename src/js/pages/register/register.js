import { header } from '../../components/header.js';
import { signIn } from '../../../firebase/auth.js';
import { redirect } from '../../../redirect.js';
import { validationRegister } from '../../../validation.js';
import { getErrorMessage } from '../../../firebase/error.js';

import voltar from '../../../../public/img/arrow.svg';
import imgLogin from '../../../../public/img/login.svg';

export default () => {
  const containerRegister = document.createElement('div');

  const templateRegister = `
  <div class="container-register">
        <div class="img-box-register">
            <img src="${imgLogin}">
        </div>
        <div class="content-box-register">        
            <div class="form-box-register">
            <h2>Criar conta</h2>              
                <form id="form-register">
                   <div class="form-control">
                        <label for="name">Nome e sobrenome</label>
                        <input type="text" class="input-register-name" placeholder="">
                        <p id='error-code' class='error-name'></p>
                    </div>
                        <div class="form-control">
                        <label for="email">Digite seu e-mail</label>
                        <input type="email" class="input-register-email" placeholder="">
                        <p id='error-code' class='error-email'></p>
                    </div>
                    <div class="form-control">
                        <label for="password">Senha</label>
                        <input type="password" class="input-register-password" placeholder="">
                        <p id='error-code' class='error-password'></p>                  
                    </div>
                    <div class="form-control">
                        <label for="password">Senha</label>
                        <input type="password" class="input-register-passwordTwo" placeholder="">
                        <p id='error-code' class='error-passwordTwo'></p>                  
                    </div>
                    <p id='error-message'></p>  
                    <div class="form-control">
                      <button type='sumbit' class="register-btn">Cadastrar conta</button>
                      <p class='message-cadastro'></p>
                   </div><div class="form-control">
                   <button class="voltar" id="voltar" ><img src="${voltar}" alt="voltar"/></button>                  
                   
                    </div>
                     </form>
                </div>
        </div>
    </div>
`;

  containerRegister.appendChild(header());

  containerRegister.innerHTML += templateRegister;

  const form = containerRegister.querySelector('#form-register');
  const name = containerRegister.querySelector('.input-register-name');
  const email = containerRegister.querySelector('.input-register-email');
  const password = containerRegister.querySelector('.input-register-password');
  const passwordTwo = containerRegister.querySelector('.input-register-passwordTwo');
  const errorMessage = containerRegister.querySelector('#error-message');
  const messageCadastro = containerRegister.querySelector('.message-cadastro');
  const btnVoltar = containerRegister.querySelector('#voltar');

  btnVoltar.addEventListener('click', () => {
    redirect('#login');
  });

  function errorValidation() {
    containerRegister.querySelectorAll('.error-name, .error-email, .error-password, .error-passwordTwo')
      .forEach((i) => {
        i.innerHTML = '';
      });
    containerRegister.querySelectorAll('.input-register-name, .input-register-email, .input-register-password, .input-register-passwordTwo')
      .forEach((i) => {
        i.classList.remove('input-error');
      });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const validation = validationRegister(
      name.value,
      email.value,
      password.value,
      passwordTwo.value,
    );
    if (validation === null) {
      signIn(
        name.value,
        email.value,
        password.value,
      )
        .then(() => {
          messageCadastro.innerHTML = 'Cadastro realizado com sucesso!';
          redirect('#login');
        })
        .catch((error) => {
          errorMessage.innerHTML = getErrorMessage(error);
        });
    } else {
      errorValidation();
      containerRegister.querySelector(`.error-${validation.source}`).innerHTML = validation.message;
      containerRegister.querySelector(`.input-register-${validation.source}`).classList.add('input-error');
    }
  });

  return containerRegister;
};
