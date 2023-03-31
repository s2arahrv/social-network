import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
} from 'firebase/firestore';

import {
  createPostData,
  newPost,
  deletePost,
  likePost,
  deslikePost,
  updatePost,
  readAllPosts,
  readOnePost,
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

  it('should get all posts from collection by publish date', async () => {
    const mockPosts = [
      {
        data: () => ({
          message: 'hello',
        }),
        id: '123',
      },
    ];
    const result = [{
      id: '123',
      message: 'hello',
    }];

    getDocs.mockReturnValue(mockPosts);
    const posts = await readAllPosts();
    expect(posts).toEqual(result);
  });
});

describe('readOnePost', () => {
  it('is a function', () => {
    expect(typeof readOnePost).toBe('function');
  });

  it('should get one post', async () => {
    const mockPost = {
      data: () => ({
        message: 'hello',
      }),
      id: '123',
    };
    const result = {
      id: '123',
      message: 'hello',
    };
    getDoc.mockImplementation(() => mockPost);
    const posts = await readOnePost();
    expect(posts).toEqual(result);
  });
});

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
