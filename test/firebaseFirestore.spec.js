// import {
// // getFirestore,
// //   collection,
// //   addDoc,
// //   getDocs,
// //   getDoc,
// //   deleteDoc,
// //   doc,
// //   updateDoc,
// //   orderBy,
// //   query,
// //   arrayUnion,
// //   arrayRemove,
// //   // eslint-disable-next-line import/no-unresolved
// } from 'firebase/firestore';

import {
  createPostData,
  // createDataAnswer,
  // newPost,
  // readAllPosts,
  // readOnePost,
  // updatePost,
  // deletePost,
  // likePost,
  // deslikePost,
} from '../src/firebase/auth.js';

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  getDocs: jest.fn(),
  getDoc: jest.fn(),
  deleteDoc: jest.fn(),
  doc: jest.fn(),
  updateDoc: jest.fn(),
  orderBy: jest.fn(),
  query: jest.fn(),
  arrayUnion: jest.fn(),
  arrayRemove: jest.fn(),
}));

describe('createPostData', () => {
  it('is a function', () => {
    expect(typeof createPostData).toBe('function');
  });
});
