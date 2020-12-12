import { createContext, useContext, memo, useEffect, useState } from 'react';
import { User as AuthUser } from '@firebase/auth-types';
import { getDocument } from '@nandorojo/swr-firestore';

import { createUser } from '@libs/db';
import { fuego } from '@libs/fuego';
import { User } from '@data-types/user.type';
import { formatUser } from '@utils/format-user';

type AuthContextType = {
  user: User | null;
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
  const [user, setUser] = useState<User | null>(null);
  const [userLoaded, setUserLoaded] = useState(false);

  const handleUser = async (authUser: AuthUser | null): Promise<void> => {
    if (authUser) {
      let { exists, ...userData } = await getDocument(`users/${authUser.uid}`);

      if (!exists) {
        const newUser = formatUser(authUser);
        userData = await createUser(newUser);
      }
      setUser(userData as User);
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
