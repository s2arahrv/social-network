import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase/configuration.js';

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export function createUserData(name) {
  const user = addDoc(collection(db, 'users'), {
    // eslint-disable-next-line no-restricted-globals
    nome: name,
  });
  console.log('Document written with ID: ', user.id);
}
