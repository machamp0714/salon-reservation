import firebase from 'firebase/app';

import { Owner, blankOwner } from './models/owner';
import { collectionName } from './constants/collections';

const writeOwner = (
  db: firebase.firestore.Firestore,
  firebaseUser: firebase.User,
) => {
  const id = firebaseUser.uid;
  const displayName = firebaseUser.displayName;
  const photoUrl = firebaseUser.photoURL;

  const owner: Owner = {
    ...blankOwner,
    id,
    displayName,
    photoUrl,
  };
  db.collection(collectionName.owners)
    .doc(id)
    .set({
      ...owner,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

  return { ...owner, id: id };
};

export default writeOwner;
