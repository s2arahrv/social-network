import { header } from '../../components/header.js';
import { login, loginGoogle } from '../../../firebase/auth.js';
import { redirect } from '../../../redirect.js';
import { getErrorMessage } from '../../../firebase/error.js';

import loginImg from '../../../../public/img/login.svg';
import imgGoogle from '../../../../public/img/google.png';

export default () => {
  const containerLogin = document.createElement('section');
  const templateLogin = `
  <div class="container-login">
        <div class="img-box-login">
            <img src="${loginImg}">
        </div>
        <div class="content-box-login">        
            <div class="form-box-login">
                    <p>Para fazer parte dessa comunidade você precisa estar logado</p>              
                <form class="form-login">
                    <div class="input-box">
                        <span>Digite seu e-mail</span>
                        <input type="email" class="input-login-email" placeholder="Digite seu e-mail">
                        <p id='error-code' class='error-email'></p>  
                    </div>
                    <div class="input-box">
                        <span>Digite sua senha</span>
                        <input type="password" class="input-login-password" placeholder="Digite sua senha">
                        <p id='error-code' class='error-password'></p>  
                    </div>
                        <p class='error-message'></p> 
                    <div class="input-box">
                        <button type="button" class="login-btn" >Entrar</button>
                    </div>
                    <div class="input-box">
                       <p>Não tem uma conta? <a href="" id="cadastrar"> Cadastre-se</a></p>                       
                    </div>
                </form>
                <div class="box-google-title">
                  <h4>Ou se preferir, você pode logar com</h4>
                <div>
                <div class="box-google">
                <button type="submit" class="btn-login-google"><img class='img-google'src="${imgGoogle}"></button> 
                <div>
                
            </div>
        </div>
    </div>
`;

  containerLogin.append(header());

  containerLogin.innerHTML += templateLogin;

  const email = containerLogin.querySelector('.input-login-email');
  const password = containerLogin.querySelector('.input-login-password');
  const btnRegister = containerLogin.querySelector('#cadastrar');
  const errorMessage = containerLogin.querySelector('.error-message');
  const btnLoginGoogle = containerLogin.querySelector('.btn-login-google');
  const btnLogin = containerLogin.querySelector('.login-btn');

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    login(email.value, password.value)
      .then(() => {
        redirect('#feed');
      })
      .catch((error) => {
        errorMessage.innerHTML = getErrorMessage(error);
      });
  });

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    redirect('#register');
  });

  btnLoginGoogle.addEventListener('click', () => {
    loginGoogle()
      .then(() => {
        redirect('#feed');
      })
      .catch((error) => {
        errorMessage.innerHTML = getErrorMessage(error);
      });
  });

  return containerLogin;
};
