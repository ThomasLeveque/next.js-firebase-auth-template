import { User as AuthUser } from '@firebase/auth-types';

import { fuego } from '@libs/fuego';
import { formatUser } from '@utils/format-user';

export const createUser = async (userId: string, authUser: AuthUser): Promise<void> => {
  const userRef = fuego.db.collection('users').doc(userId);
  const newUser = formatUser(authUser);
  return userRef.set(newUser);
};
