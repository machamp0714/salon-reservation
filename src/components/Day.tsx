import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useReservations from '../hooks/use-reservations';

interface DayComponentProps {
  date: {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  };
  accessibilityLable: string;
}

const Day: FC<DayComponentProps> = ({ date, accessibilityLable, children }) => {
  const { reservations } = useReservations({
    year: date.year,
    month: date.month,
    day: date.day,
  });

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
