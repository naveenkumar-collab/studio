
'use client';
import {
  createContext,
  useContext,
  type ReactNode,
} from 'react';

import { type FirebaseApp } from 'firebase/app';
import { type Auth } from 'firebase/auth';
import { type Firestore } from 'firebase/firestore';

export interface FirebaseContextValue {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

const FirebaseContext = createContext<FirebaseContextValue | null>(null);

export function FirebaseProvider({
  children,
  ...value
}: {
  children: ReactNode;
} & FirebaseContextValue) {
  return (
    <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}

export function useFirebaseApp() {
  const { firebaseApp } = useFirebase();
  return firebaseApp;
}

export function useAuth() {
  const { auth } = useFirebase();
  return auth;
}

export function useFirestore() {
  const { firestore } = useFirebase();
  return firestore;
}
