import { createContext, useContext, memo, useEffect, useState } from 'react';
import { User as AuthUser } from '@firebase/auth-types';
import { getDocument, Document } from '@nandorojo/swr-firestore';

import { createUser } from '@libs/db';
import { fuego } from '@libs/fuego';
import { User } from '@data-types/user.type';

type AuthContextType = {
  user: Document<User> | null;
  userLoaded: boolean;
};

const authContext = createContext<AuthContextType>({
  user: null,
  userLoaded: false,
});

export const useAuth = (): AuthContextType => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('useAuth must be used in a component within a AuthProvider.');
  }
  return context;
};

const useProvideAuth = () => {
  const [user, setUser] = useState<Document<User> | null>(null);
  const [userLoaded, setUserLoaded] = useState(false);

  const handleUser = async (authUser: AuthUser | null): Promise<void> => {
    if (authUser) {
      let userData = await getDocument<Document<User>>(`users/${authUser.uid}`);

      if (!userData.exists) {
        await createUser(authUser.uid, authUser);
        userData = await getDocument<Document<User>>(`users/${authUser.uid}`);
      }
      setUser(userData);
    } else {
      setUser(null);
    }
    setUserLoaded(true);
  };

  useEffect(() => {
    const unsubscribe = fuego.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    userLoaded,
  };
};

const AuthProvider = memo(({ children }) => {
  const auth: AuthContextType = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
});

export default AuthProvider;
