import React from 'react';
import firebase from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import FirebaseApp from './src/FirebaseApp';
import Root from './src/screens/App/Root'

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default function App() {
	return (
		<FirebaseApp>
			<Root />
		</FirebaseApp>
	);
}
