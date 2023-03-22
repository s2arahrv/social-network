// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDQU5mvnNnfW2GubGoCFoPyQHslBNiTHA0',
  authDomain: 'ola-devas.firebaseapp.com',
  databaseURL: 'https://ola-devas-default-rtdb.firebaseio.com',
  projectId: 'ola-devas',
  storageBucket: 'ola-devas.appspot.com',
  messagingSenderId: '458625610581',
  appId: '1:458625610581:web:3d2aa10a22ac06f844f5dc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
