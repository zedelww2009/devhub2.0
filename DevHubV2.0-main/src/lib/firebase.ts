import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: AIzaSyC1i9VOVMtzNrsmFXxu7Lqnqh12XCkWBIc
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: devhub1-a0478.firebaseapp.com

process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: devhub1-a0478.firebaseapp.com

process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: devhub1-a0478.firebaseapp.com

process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: 1044199466193
  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: G-HB1YSZQ4VV
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function createFirebaseApp(): FirebaseApp {
  if (getApps().length) {
    return getApp();
  }

  // Warn in development if config is missing
  if (
    process.env.NODE_ENV === "development" &&
    !firebaseConfig.apiKey
  ) {
    console.warn(
      "[Firebase] Missing configuration. Copy .env.example to .env.local and fill in your Firebase credentials."
    );
  }

  return initializeApp(firebaseConfig);
}

const app = createFirebaseApp();

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export default app;
