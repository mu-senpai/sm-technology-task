import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_apiKey,
  authDomain: process.env.NEXT_authDomain,
  projectId: process.env.NEXT_projectId,
  storageBucket: process.env.NEXT_storageBucket,
  messagingSenderId: process.env.NEXT_messagingSenderId,
  appId: process.env.NEXT_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
export default app;