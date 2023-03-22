// eslint-disable-next-line import/no-extraneous-dependencies
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { app } from './configuration.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ----------- cadastro de usuário novo------------------ //
export async function signIn(name, email, password) {
  return createUserWithEmailAndPassword(auth, name, email, password)
    .then(() => updateProfile(auth.currentUser, {
      displayName: name,
    }));
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
