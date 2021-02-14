import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import ReservationScreen from '../screens/ReservationScreen';
import AddReservationScreen from '../screens/AddReservationScreen';
import CustomerScreen from '../screens/Customer';
import AddReservationModal from '../components/AddReservationModal';

const Tab = createBottomTabNavigator();

type IconProps = {
  color: string;
  size: number;
};

const tabIcon = (iconName: string) =>
  function icon(props: IconProps) {
    return <Icon {...props} name={iconName} type="font-awesome-5" />;
  };

const tabBarButton = () =>
  function tabButton() {
    return <AddReservationModal />;
  };

const MainTabNavigator: FC = () => {
  return (
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
        name="AddReservation"
        component={AddReservationScreen}
        options={{
          tabBarButton: tabBarButton(),
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
  );
};

export default MainTabNavigator;
