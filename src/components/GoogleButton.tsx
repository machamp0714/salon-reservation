import React, { FC } from 'react';
import { Button } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';

import firebase from 'firebase/app';
import 'firebase/auth';

import { loginConfig } from '../../firebase-config';

const GoogleButton: FC = () => {
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
    } else {
      console.log('failed');
    }
  };

  return <Button title="Google" onPress={handlePress} />;
};

export default GoogleButton;
