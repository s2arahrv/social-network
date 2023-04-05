import {
  initializeApp,
// eslint-disable-next-line import/no-unresolved
} from 'firebase/app';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
  // onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
  query,
  arrayUnion,
  arrayRemove,
// eslint-disable-next-line import/no-unresolved
} from 'firebase/firestore';

import {
  firebaseConfig,
} from './configuration.js';

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);

export function getUser() {
  return auth.currentUser;
}

export const createPostData = (postContent) => {
  const date = new Date();
  const dataAtual = date;
  const dataPostagem = dataAtual.toLocaleDateString();
  return {
    message: postContent,
    userId: getUser().uid,
    userName: getUser().displayName,
    likes: [],
    publishDate: dataPostagem,
    editDate: date.toLocaleDateString(),
  };
};

export const newPost = async (postContent) => {
  const dataPost = createPostData(postContent);
  const docRef = addDoc(collection(db, 'posts'), dataPost);
  return docRef;
};

export async function readAllPosts() {
  const posts = [];
  const queryOrder = query(collection(db, 'posts'), orderBy('publishDate', 'asc'));
  const querySnapshot = await getDocs(queryOrder);
  querySnapshot.forEach((item) => {
    const data = item.data();
    data.id = item.id;
    posts.push(data);
  });

  return posts;
}

export const readOnePost = async (idPost) => {
  const post = await getDoc(doc(db, 'posts', idPost));
  return {
    id: post.id,
    ...post.data(),
  };
};

export const updatePost = (idPost, postContent) => {
  const date = new Date();
  const post = doc(db, 'posts', idPost);
  return updateDoc(post, {
    message: postContent,
    editDate: date.toLocaleDateString(),
  });
};

export const deletePost = (idPost) => {
  deleteDoc(doc(db, 'posts', idPost));
};

export function likePost(postId, userUID) {
  const docRef = doc(db, 'posts', postId);
  updateDoc(docRef, {
    likes: arrayUnion(userUID),
  });
}

export function deslikePost(postId, userUID) {
  const docRef = doc(db, 'posts', postId);
  updateDoc(docRef, {
    likes: arrayRemove(userUID),
  });
}

export async function signIn(name, email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user; // aqui atualizar o perfil do usuario
      return updateProfile(user, { displayName: name });
    });
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function disconnect() {
  return signOut(auth);
}

export function loginGoogle() {
  return signInWithPopup(auth, provider);
}
