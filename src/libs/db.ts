import { User } from '@data-types/user.type';
import { fuego } from '@libs/fuego';

export const createUser = async (newUser: User): Promise<User> => {
  const userRef = fuego.db.collection('users').doc(newUser.id);
  const batch = fuego.db.batch();

  batch.set(userRef, newUser);

  await batch.commit();
  return newUser;
};
