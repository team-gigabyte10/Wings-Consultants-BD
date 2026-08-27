import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  auth,
  db,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInAnonymously,
  updateProfile,
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  serverTimestamp,
  FirebaseUser
} from '../lib/firebase';
import { UserProfile } from '../types';

interface AuthContextType {
  user: FirebaseUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  isFirebaseConnected: boolean;
  isAdmin: boolean;
  
  // Auth Operations
  registerWithEmail: (email: string, pass: string, name: string, company?: string, phone?: string) => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  loginAsGuest: () => Promise<void>;
  logout: () => Promise<void>;
  updateProfileDetails: (details: Partial<UserProfile>) => Promise<void>;
  toggleSaveCourse: (courseTitle: string) => Promise<void>;
  
  // UI Dialog Controls
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authModalMode: 'login' | 'register';
  setAuthModalMode: (mode: 'login' | 'register') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFirebaseConnected, setIsFirebaseConnected] = useState(true);
  
  // Modal control
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    let unsubscribeProfile: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (currentUser) => {
        setUser(currentUser);
        setIsFirebaseConnected(true);

        if (currentUser) {
          // Listen to user profile document in Firestore
          const userDocRef = doc(db, 'users', currentUser.uid);
          unsubscribeProfile = onSnapshot(
            userDocRef,
            (docSnap) => {
              if (docSnap.exists()) {
                setUserProfile(docSnap.data() as UserProfile);
              } else {
                // Initialize default profile document
                const defaultProfile: UserProfile = {
                  uid: currentUser.uid,
                  email: currentUser.email || '',
                  displayName: currentUser.displayName || (currentUser.isAnonymous ? 'Guest Client' : 'Corporate User'),
                  role: (currentUser.email === 'admin@wingsbd.com' || currentUser.email === 'wingsconsultantsbd@gmail.com') ? 'admin' : 'client',
                  photoURL: currentUser.photoURL || '',
                  savedCourses: [],
                  createdAt: new Date().toISOString()
                };
                setDoc(userDocRef, defaultProfile, { merge: true }).catch((err) =>
                  console.warn('Could not auto-create user profile:', err)
                );
                setUserProfile(defaultProfile);
              }
              setLoading(false);
            },
            (error) => {
              console.warn('Firestore profile listener error (fallback local):', error);
              setLoading(false);
            }
          );
        } else {
          setUserProfile(null);
          if (unsubscribeProfile) {
            unsubscribeProfile();
            unsubscribeProfile = null;
          }
          setLoading(false);
        }
      },
      (error) => {
        console.error('Firebase Auth state error:', error);
        setIsFirebaseConnected(false);
        setLoading(false);
      }
    );

    return () => {
      unsubscribeAuth();
      if (unsubscribeProfile) {
        unsubscribeProfile();
      }
    };
  }, []);

  const registerWithEmail = async (
    email: string,
    pass: string,
    name: string,
    company?: string,
    phone?: string
  ) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const createdUser = userCredential.user;

    if (name) {
      await updateProfile(createdUser, { displayName: name });
    }

    const isAdminUser = email.toLowerCase() === 'admin@wingsbd.com' || email.toLowerCase() === 'wingsconsultantsbd@gmail.com';

    const newProfile: UserProfile = {
      uid: createdUser.uid,
      email: createdUser.email || email,
      displayName: name || 'Valued Client',
      role: isAdminUser ? 'admin' : 'client',
      company: company || '',
      phone: phone || '',
      savedCourses: [],
      createdAt: new Date().toISOString()
    };

    const userDocRef = doc(db, 'users', createdUser.uid);
    await setDoc(userDocRef, newProfile);
    setUserProfile(newProfile);
  };

  const loginWithEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const loginAsGuest = async () => {
    await signInAnonymously(auth);
  };

  const logout = async () => {
    await signOut(auth);
    setUserProfile(null);
  };

  const updateProfileDetails = async (details: Partial<UserProfile>) => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    await updateDoc(userDocRef, details);
    setUserProfile((prev) => (prev ? { ...prev, ...details } : null));
  };

  const toggleSaveCourse = async (courseTitle: string) => {
    if (!user || !userProfile) {
      setIsAuthModalOpen(true);
      return;
    }
    const currentSaved = userProfile.savedCourses || [];
    const isSaved = currentSaved.includes(courseTitle);
    const updated = isSaved
      ? currentSaved.filter((c) => c !== courseTitle)
      : [...currentSaved, courseTitle];

    await updateProfileDetails({ savedCourses: updated });
  };

  const isAdmin = userProfile?.role === 'admin' || user?.email === 'admin@wingsbd.com' || user?.email === 'wingsconsultantsbd@gmail.com';

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        isFirebaseConnected,
        isAdmin,
        registerWithEmail,
        loginWithEmail,
        loginAsGuest,
        logout,
        updateProfileDetails,
        toggleSaveCourse,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalMode,
        setAuthModalMode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
