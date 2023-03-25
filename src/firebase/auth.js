import {
  initializeApp,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';

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
} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js';

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
  return {
    message: postContent,
    userId: getUser().uid,
    userName: getUser().displayName,
    image: '',
    answers: [],
    likes: [],
    publishDate: date.toLocaleDateString(),
    editDate: date.toLocaleDateString(),

  };
};

export const createDataAnswer = (postContent) => {
  const date = new Date();
  return {
    message: postContent,
    userId: getUser().uid,
    userName: getUser().displayName,
    likes: [],
    publishDate: date.toLocaleDateString(),
    editDate: date.toLocaleDateString(),

  };
};

export const newPost = async (postContent) => {
  const dataPost = createPostData(postContent);
  const docRef = addDoc(collection(db, 'posts'), dataPost);
  return docRef;
};

export async function readAllPosts() {
  const queryOrder = query(collection(db, 'posts'), orderBy('publishDate'));
  const querySnapshot = await getDocs(queryOrder);
  const posts = [];

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

// export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

// export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));

// export const getTask = (id) => getDoc(doc(db, 'tasks', id));

// export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);

// export const getTasks = () => getDocs(collection(db, 'tasks'));

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
