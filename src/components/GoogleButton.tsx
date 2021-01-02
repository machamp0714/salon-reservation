import React, { FC, useContext } from 'react';
import { Button } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';

import firebase from 'firebase/app';
import 'firebase/auth';

import writeOwner from '../services/write-owner';
import { loginConfig } from '../../firebase-config';

import { FirebaseContext, OwnerContext } from '../contexts';

const GoogleButton: FC = () => {
  const { db } = useContext(FirebaseContext);
  const { setOwner } = useContext(OwnerContext);
  if (!db) throw new Error('firebase is not initialized.');

  const handlePress = async () => {
    const result = await Google.logInAsync(loginConfig);

    if (result.type === 'success') {
      const { idToken, accessToken } = result;
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      const userCredential = await firebase
        .auth()
        .signInWithCredential(credential);
      const firebaseUser = userCredential.user;
      if (firebaseUser) {
        const theOwner = writeOwner(db, firebaseUser);
        setOwner(theOwner);
      }
    } else {
      // FIX
      console.log('failed'); // eslint-disable-line no-console
    }
  };

  return <Button title="Google" onPress={handlePress} />;
};

export default GoogleButton;
