import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DayComponentProps {
  date: {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  };
  testID: string;
  accessibilityLable: string;
}

const Day: FC<DayComponentProps> = ({ date, accessibilityLable, children }) => {
  return (
    <View accessibilityLabel={accessibilityLable} style={styles.day}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  day: {
    width: 55,
    height: 107,
  },
  text: {
    textAlign: 'center',
  },
});

export default Day;
