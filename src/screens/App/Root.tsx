import React, { FC, useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseContext, OwnerContext } from '../../contexts';
import findOwner from '../../services/find-owner';
import Loader from '../../components/Loader';
import MainTabNavigator from '../../navigations/MainTabNavigator';
import AuthScreen from '../AuthScreen';

const Root: FC = () => {
  const { db, auth } = useContext(FirebaseContext);
  const { owner, setOwner } = useContext(OwnerContext);
  if (!db) throw new Error('firebase is not initialized!');

  const [navigationIsReady, setNavigationIsReady] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribed = auth?.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const theOwner = await findOwner(db, firebaseUser.uid);
        setOwner(theOwner);
      } else {
        setOwner(null);
      }
      setNavigationIsReady(true);
    });

    return unsubscribed;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let renderComponent;

  if (!owner && !navigationIsReady) {
    renderComponent = <Loader />;
  } else if (owner) {
    renderComponent = <MainTabNavigator />;
  } else {
    renderComponent = <AuthScreen />;
  }

  return <NavigationContainer>{renderComponent}</NavigationContainer>;
};

export default Root;
