import React, { FC, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseContext, OwnerContext } from './contexts';

import { Owner } from './services/models/owner';

const FirebaseApp: FC = ({ children }) => {
  const [owner, setOwner] = useState<Owner | null>(null);

  const auth = firebase.auth();
  const db = firebase.firestore();

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      <OwnerContext.Provider value={{ owner, setOwner }}>
        {children}
      </OwnerContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
