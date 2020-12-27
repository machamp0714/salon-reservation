import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';

import firebase from 'firebase/app';
import 'firebase/auth';

import { loginConfig } from '../../firebase-config';

const AuthScreen: FC = () => {
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

  return (
    <View style={styles.container}>
      <Button title="Google" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthScreen;
