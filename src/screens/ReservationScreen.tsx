import React, { FC } from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { CalendarList } from 'react-native-calendars';

const height = Dimensions.get('window').height;

const ReservationScreen: FC = () => {
  return (
    <SafeAreaView>
      <CalendarList calendarHeight={height} horizontal={true} />
    </SafeAreaView>
  );
};

export default ReservationScreen;
