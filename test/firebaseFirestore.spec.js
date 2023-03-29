import { getAuth } from 'firebase/auth';
import {
// getFirestore,
// collection,
// addDoc,
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
} from 'firebase/firestore';
import {
  // createDataAnswer,
  createPostData,
  // getUser,
  // createDataAnswer,
  // newPost,
  // readAllPosts,
  // readOnePost,
  // updatePost,
  // deletePost,
  // likePost,
  // deslikePost,
} from '../src/firebase/auth.js';

jest.mock('firebase/firestore');
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    currentUser: {
      uid: '1234',
      displayName: 'Usuária Teste',
    },
  })),
  GoogleAuthProvider: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('createPostData', () => {
  it('is a function', () => {
    expect(typeof createPostData).toBe('function');
  });

  //   it('should create data for the new post', () => {
  //     // const mockDate = new Date().toLocaleDateString;
  //     const mockUser = getAuth().currentUser;

  //     const mockUserId = mockUser.uid;
  //     const mockUserName = mockUser.displayName;
  //     const mockLikes = [];
  //     const mockDate = new Date();
  //     const mockContent = 'hello';

  //     const mockPost = {
  //       message: mockContent,
  //       userId: mockUserId,
  //       userName: mockUserName,
  //       likes: mockLikes,
  //       publishDate: mockDate.toLocaleDateString,
  //       editDate: mockDate.toLocaleDateString,
  //     };

//     expect(getAuth).toHaveBeenCalledTimes(1);
//   });
});
