import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CustomerScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>CustomerScreen</Text>
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

export default CustomerScreen;
