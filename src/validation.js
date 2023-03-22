export function validationRegister(name, email, password, passwordTwo) {
  const regex = /\S+@\S+\.\S+/;
  const validateEmail = regex.test(email);

  if (name === '') {
    return {
      message: 'Você precisa preencher o campo de nome.',
      source: 'name',
    };
  } if (name.length < 8) {
    return {
      message: 'O nome precisa ser maior que 8 caracteres',
      source: 'name',
    };
  }
  if (email === '') {
    return {
      message: 'Você precisa preencher o campo de email.',
      source: 'email',
    };
  }
  if (password === '') {
    return {
      message: 'Você precisa preencher o campo de senha.',
      source: 'password',
    };
  } if (password.length < 6) {
    return {
      message: 'A senha precisa ter mais que 6 caracters',
      source: 'password',
    };
  }
  if (passwordTwo === '') {
    return {
      message: 'Você precisa preencher o campo de confirme sua senha.',
      source: 'passwordTwo',
    };
  } if (password !== passwordTwo) {
    return {
      message: 'As senhas não conferem.',
      source: 'passwordTwo',
    };
  }
  if (validateEmail === false) {
    return {
      message: 'Insira um e-mail válido (ex: seunome@email.com)',
      source: 'email',
    };
  }
  return null;
}
