import React, { FC, useContext } from 'react';
import AuthScreen from '../screens/AuthScreen';
import MainTabNavigator from '../navigations/MainTabNavigator';
import { OwnerContext } from '../contexts';

const AppNavigator: FC = () => {
  const { owner } = useContext(OwnerContext);

  return !owner ? <AuthScreen /> : <MainTabNavigator />;
};

export default AppNavigator;
