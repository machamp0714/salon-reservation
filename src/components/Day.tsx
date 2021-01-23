import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

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

const Day: FC<DayComponentProps> = ({
  date,
  testID,
  accessibilityLable,
  children,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      accessibilityLabel={accessibilityLable}
      style={styles.day}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  day: {
    width: 50,
    height: 110,
    borderColor: '#C1C1C1',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
  },
});

export default Day;
