import React, { FC, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseContext, OwnerContext } from './contexts';

import { Owner } from './services/models/owner';
import findOwner from './services/find-owner';

const FirebaseApp: FC = ({ children }) => {
  const [owner, setOwner] = useState<Owner | null>(null);

  const auth = firebase.auth();
  const db = firebase.firestore();

  const unsubscribed = auth.onAuthStateChanged(async (firebaseUser) => {
    if (firebaseUser) {
      const owner = await findOwner(db, firebaseUser.uid);
      setOwner(owner);
    } else {
      setOwner(null);
    }
  });

  useEffect(() => {
    return unsubscribed;
  });

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      <OwnerContext.Provider value={{ owner, setOwner }}>
        {children}
      </OwnerContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
