import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ReservationScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>ReservationScreen</Text>
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

export default ReservationScreen;
