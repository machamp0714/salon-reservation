import React, { FC } from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import Day from '../components/Day';

const height = Dimensions.get('window').height;
const theme = {
  'stylesheet.calendar.main': {
    week: {
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
      justifyContent: 'start',
    },
  },
  'stylesheet.calendar-list.main': {
    calendar: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
};

const ReservationScreen: FC = () => {
  return (
    <SafeAreaView>
      <CalendarList
        calendarHeight={height}
        horizontal={true}
        dayComponent={Day}
        theme={theme}
      />
    </SafeAreaView>
  );
};

export default ReservationScreen;
