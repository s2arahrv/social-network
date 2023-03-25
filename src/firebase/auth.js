// eslint-disable-next-line import/no-extraneous-dependencies
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { redirect } from '../redirect.js';

import { app } from './configuration.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ----------- cadastro de usuário novo------------------ //
export async function signIn(name, email, password) {
  return createUserWithEmailAndPassword(auth, name, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user; // aqui atualizar o perfil do usuario
      return updateProfile(user, { displayName: name });
      // ...
    });
}
// ----------- Login de usuário cadastrado------------------ //
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
// ----------- desconectar usuário------------------ //
export async function disconnect() {
  return signOut(auth);
}
// ----------- Login com Google------------------ //
export function loginGoogle() {
  return signInWithPopup(auth, provider);
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
    redirect('#feed');
    // ...
  } else {
    // User is signed out
    // ...
  }
});
