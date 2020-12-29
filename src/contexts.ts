import { createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { Owner } from './services/models/owner';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

type OwnerContextValue = {
  owner: Owner | null;
  setOwner: (owner: Owner | null) => void;
};

export const OwnerContext = createContext<OwnerContextValue>({
  owner: null,
  setOwner: () => undefined,
});
