import firebase from 'firebase/app';

type Config = Parameters<typeof firebase.initializeApp>[0];

class Fuego {
  public db: ReturnType<firebase.app.App['firestore']>;
  public auth: typeof firebase.auth;
  public functions: typeof firebase.functions;
  public storage: typeof firebase.storage;

  constructor(config: Config) {
    this.db = !firebase.apps.length
      ? firebase.initializeApp(config).firestore()
      : firebase.app().firestore();
    this.auth = firebase.auth;
    this.functions = firebase.functions;
    this.storage = firebase.storage;
  }
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export const fuego = new Fuego(firebaseConfig);
