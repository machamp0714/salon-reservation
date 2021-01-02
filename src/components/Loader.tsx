import React, { FC } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

interface LoaderProps {
  color?: string;
  size?: number | 'small' | 'large';
}

const Loader: FC<LoaderProps> = ({ color, size }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loader;
