import { User } from '@data-types/user.type';
import { fuego } from '@libs/fuego';

export const createUser = async (userId: string, newUser: User): Promise<void> => {
  const userRef = fuego.db.collection('users').doc(userId);
  return userRef.set(newUser);
};
