import { User as AuthUser } from '@firebase/auth-types';

import { User } from '@data-types/user.type';

export const formatUser = ({ uid, email, displayName, photoURL, providerData }: AuthUser): User => {
  const formatedDisplayName = displayName || (email?.split('@')[0] as string);

  return {
    id: uid,
    email: email as string,
    photoURL,
    displayName: formatedDisplayName,
    provider: providerData[0]?.providerId,
    isAdmin: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
};
