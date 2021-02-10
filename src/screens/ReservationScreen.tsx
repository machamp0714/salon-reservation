import React, { FC } from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Day from '../components/Day';

const height = Dimensions.get('window').height;
const theme = {
  'stylesheet.calendar.main': {
    week: {
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
      justifyContent: 'flex-start',
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
      <Calendar
        monthFormat={'yyyy年 MM月'}
        calendarHeight={height}
        horizontal={true}
        dayComponent={Day}
        theme={theme}
      />
    </SafeAreaView>
  );
};

LocaleConfig.locales.jp = {
  monthNames: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  monthNamesShort: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  dayNames: [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
  ],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
};

LocaleConfig.defaultLocale = 'jp';

export default ReservationScreen;
