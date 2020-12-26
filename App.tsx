import React from 'react';
import firebase from 'firebase/app';
import firebaseConfig from './firebase-config';
import MainTabNavigator from './src/navigations/MainTabNavigator';

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default function App() {
	return (
		<MainTabNavigator />
	);
}
