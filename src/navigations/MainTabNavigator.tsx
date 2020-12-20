import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReservationScreen from '../screens/ReservationScreen';
import CustomerScreen from '../screens/Customer';

const Tab = createBottomTabNavigator();

const MainTabNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Reservation" component={ReservationScreen} />
        <Tab.Screen name="Customer" component={CustomerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
