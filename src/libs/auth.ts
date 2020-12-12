import { UserCredential } from '@firebase/auth-types';

import { fuego } from './fuego';

export const signUpWithEmail = async (email: string, password: string): Promise<UserCredential> => {
  return fuego.auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithEmail = async (email: string, password: string): Promise<UserCredential> => {
  return fuego.auth().signInWithEmailAndPassword(email, password);
};

export const signInWithGoogle = (): Promise<UserCredential> => {
  return fuego.auth().signInWithPopup(new fuego.auth.GoogleAuthProvider());
};

export const signOut = async (): Promise<void> => {
  return fuego.auth().signOut();
};
