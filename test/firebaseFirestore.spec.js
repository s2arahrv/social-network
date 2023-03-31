import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  // query, getDocs, orderBy,
  // getDoc,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  // getDoc,
} from 'firebase/firestore';

import {
  createPostData,
  newPost,
  // updatePost,
  // readAllPosts,
  // readOnePost,
  // updatePost,
  deletePost,
  likePost,
  deslikePost,
  updatePost,
  // readOnePost,
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
  it('should create data for the new post', () => {
  // const mockDate = new Date().toLocaleDateString;
    const mockUser = getAuth().currentUser;

    const mockUserId = mockUser.uid;
    const mockUserName = mockUser.displayName;
    const mockLikes = [];
    const mockDate = new Date().toLocaleDateString();
    const mockContent = 'hello';

    const mockData = {
      message: mockContent,
      userId: mockUserId,
      userName: mockUserName,
      likes: mockLikes,
      publishDate: mockDate,
      editDate: mockDate,
    };

    expect(getAuth).toHaveBeenCalledTimes(1);
    expect(createPostData(mockContent)).toEqual(mockData);
  });
});

// export const createPostData = (postContent) => {
//   const date = new Date();
//   return {
//     message: postContent,
//     userId: getUser().uid,
//     userName: getUser().displayName,
//     // image: '',
//     // answers: [],
//     likes: [],
//     publishDate: date.toLocaleDateString(),
//     editDate: date.toLocaleDateString(),

//   };
// };

describe('newPost', () => {
  it('is a function', () => {
    expect(typeof newPost).toBe('function');
  });

  it('creates a post and adds it to the collection', async () => {
    addDoc.mockResolvedValue();
    const mockCollection = 'collection';
    collection.mockReturnValue(mockCollection);
    const mockUser = getAuth().currentUser;

    const mockUserId = mockUser.uid;
    const mockUserName = mockUser.displayName;
    const mockLikes = [];
    const mockDate = new Date().toLocaleDateString();
    const mockContent = 'hello';

    const mockData = {
      message: mockContent,
      userId: mockUserId,
      userName: mockUserName,
      likes: mockLikes,
      publishDate: mockDate,
      editDate: mockDate,
    };

    await newPost(createPostData(mockContent));

    const mockPost = createPostData(mockData);

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(mockCollection, mockPost);
    expect(collection).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledWith(undefined, 'posts');
  });
});

describe('readAllPosts', () => {
  it('is a function', () => {
    expect(typeof newPost).toBe('function');
  });

  //   it('should get all posts from collection by publish date', async () => {
  //     const mockQuery = query.mockReturnValue();
  //     const mockOrder = orderBy.mockReturnValue();
  //     const mockCollection = collection.mockReturnValue();
  //     const mockPosts = [];

  //     getDocs.mockResolvedValue();

  //     const mockSnapshot = await getDocs(mockQuery);

  //     await readAllPosts();

//     expect(query).toHaveBeenCalledTimes(1);
//     expect(query).toHaveBeenCalledWith(mockCollection, mockOrder);
//   });
});

describe('readOnePost', () => {
  it('is a function', () => {
    expect(typeof newPost).toBe('function');
  });

  // it('returns a post id and data', async () => {
  //   const mockDoc = 'doc';
  //   doc.mockResolvedValue(mockDoc);

  //   const mockId = 'post-id';
  //   const mockPost = await getDoc(mockDoc);
  //   const mockReturn = {
  //     id: mockId,
  //     ...mockPost.data(),
  //   };

  //   readOnePost(mockId);

  //   expect(getDoc).toHaveBeenCalledTimes(1);
  //   expect(getDoc).toHaveBeenCalledWith(mockDoc);
  //   expect(doc).toHaveBeenCalledTimes(1);
  //   expect(doc).toHaveBeenCalledWith(undefined, 'posts', mockId);
  //   expect(mockPost).toBe(mockReturn);
  // });
});

// export const readOnePost = async (idPost) => {
//   const post = await getDoc(doc(db, 'posts', idPost));
//   return {
//     id: post.id,
//     ...post.data(),
//   };
// };

describe('updatePost', () => {
  it('should update a post when it is edited', () => {
    updateDoc.mockResolvedValue();
    const mockDoc = 'doc';
    doc.mockReturnValue(mockDoc);
    const mockDate = new Date().toLocaleDateString();
    const mockId = 'post-id';
    const mockContent = 'hello';
    const editedPost = {
      message: mockContent,
      editDate: mockDate,
    };

    updatePost(mockId, mockContent);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', mockId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(mockDoc, editedPost);
  });
});

describe('deletePost', () => {
  it('should delete a post', () => {
    const mockDoc = 'doc';
    doc.mockReturnValue(mockDoc);
    deleteDoc.mockResolvedValue();
    const mockId = 'post-id';

    deletePost(mockId);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', mockId);
    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledWith(mockDoc);
  });
});

describe('likePost', () => {
  it('should update post when it is liked', () => {
    updateDoc.mockResolvedValue();
    const mockDoc = 'doc';
    doc.mockReturnValue(mockDoc);
    const mockUnion = 'union';
    arrayUnion.mockReturnValue(mockUnion);

    const mockPostId = 'post-id';
    const mockUID = '1234';
    const likedPost = {
      likes: mockUnion,
    };

    likePost(mockPostId, mockUID);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', mockPostId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(mockDoc, likedPost);
    expect(arrayUnion).toHaveBeenCalledTimes(1);
    expect(arrayUnion).toHaveBeenCalledWith(mockUID);
  });
});

describe('deslikePost', () => {
  it('should update post removing like from array', () => {
    updateDoc.mockResolvedValue();
    const mockDoc = 'doc';
    doc.mockReturnValue(mockDoc);
    const mockRemove = 'remove';
    arrayRemove.mockReturnValue(mockRemove);

    const mockPostId = 'post-id';
    const mockUID = '1234';
    const dislikedPost = {
      likes: mockRemove,
    };

    deslikePost(mockPostId, mockUID);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', mockPostId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(mockDoc, dislikedPost);
    expect(arrayRemove).toHaveBeenCalledTimes(1);
    expect(arrayRemove).toHaveBeenCalledWith(mockUID);
  });
});
