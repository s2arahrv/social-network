import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from 'firebase/auth';

import {
  signIn, login, disconnect, loginGoogle,
} from '../src/firebase/auth.js';

jest.mock('firebase/auth');

const displayName = 'Usuário teste';
const email = 'test@test.com';
const password = '1234567';

describe('signIn', () => {
  it('is a function', () => {
    expect(typeof signIn).toBe('function');
  });

  it('should register an user with an email and password', async () => {
    const mockUser = {
      user: {},
    };

    createUserWithEmailAndPassword.mockResolvedValue(mockUser);
    updateProfile.mockResolvedValue();

    await signIn(displayName, email, password);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      undefined,
      email,
      password,
    );
    expect(updateProfile).toHaveBeenCalledTimes(1);
    expect(updateProfile).toHaveBeenCalledWith(mockUser.user, { displayName });
  });
});

describe('login', () => {
  it('should login an user with their email and password', async () => {
    signInWithEmailAndPassword.mockResolvedValue();
    await login(email, password);

    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });
});

describe('signOut', () => {
  it('should log out an user', async () => {
    signOut.mockResolvedValue();
    await disconnect();

    expect(signOut).toHaveBeenCalledTimes(1);
    expect(signOut).toHaveBeenCalledWith(undefined);
  });
});

describe('loginGoogle', () => {
  it('should login an user with Google Popup', async () => {
    signInWithPopup.mockResolvedValue();
    await loginGoogle();

    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    expect(signInWithPopup).toHaveBeenCalledWith(undefined, {});
  });
});
