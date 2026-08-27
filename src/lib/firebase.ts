import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInAnonymously,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import {
  initializeFirestore,
  getFirestore,
  setLogLevel,
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  deleteDoc,
  where,
  serverTimestamp,
  Firestore
} from 'firebase/firestore';
import firebaseConfigJson from '../../firebase-applet-config.json';

// Support both config from JSON and environment fallback
export const firebaseConfig = {
  apiKey: firebaseConfigJson.apiKey || "AIzaSyDVU9Y2x3kfBt6N2T-IK1zdf87wcfNst6Q",
  authDomain: firebaseConfigJson.authDomain || "buy-now-31fd2.firebaseapp.com",
  projectId: firebaseConfigJson.projectId || "buy-now-31fd2",
  storageBucket: firebaseConfigJson.storageBucket || "buy-now-31fd2.appspot.com",
  messagingSenderId: firebaseConfigJson.messagingSenderId || "757090506347",
  appId: firebaseConfigJson.appId || "1:757090506347:web:c9a684855b7544d274432e",
  firestoreDatabaseId: firebaseConfigJson.firestoreDatabaseId || "ai-studio-wingsconsultants-eeec4839-74fa-4ba7-a5c8-35a3a9b8fe46"
};

// Initialize Firebase App
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Auth instance
export const auth = getAuth(app);

// Suppress benign internal network reconnection spam
try {
  setLogLevel('error');
} catch {
  // Ignore in environments where setLogLevel might not be permitted
}

// Initialize Firestore with robust long-polling auto-detection for web/iframe environments
const databaseId = firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)'
  ? firebaseConfig.firestoreDatabaseId
  : undefined;

let firestoreInstance: Firestore;
try {
  firestoreInstance = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
  }, databaseId);
} catch {
  firestoreInstance = databaseId ? getFirestore(app, databaseId) : getFirestore(app);
}

export const db: Firestore = firestoreInstance;

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInAnonymously,
  updateProfile,
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  deleteDoc,
  where,
  serverTimestamp
};

export type { FirebaseUser };
