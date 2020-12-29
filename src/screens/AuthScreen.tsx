import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import GoogleButton from '../components/GoogleButton';

const AuthScreen: FC = () => {
  return (
    <View style={styles.container}>
      <GoogleButton />
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
