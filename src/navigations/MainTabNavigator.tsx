import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import ReservationScreen from '../screens/ReservationScreen';
import CustomerScreen from '../screens/Customer';

const Tab = createBottomTabNavigator();

type IconProps = {
  color: string;
  size: number;
};

const tabIcon = (iconName: string) =>
  function icon(props: IconProps) {
    return <Icon {...props} name={iconName} type="font-awesome-5" />;
  };

const MainTabNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Reservation"
          component={ReservationScreen}
          options={{
            tabBarLabel: '予約表',
            tabBarIcon: tabIcon('calendar-alt'),
          }}
        />
        <Tab.Screen
          name="Customer"
          component={CustomerScreen}
          options={{
            tabBarLabel: '顧客管理',
            tabBarIcon: tabIcon('users'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
