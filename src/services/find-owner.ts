import firebase from 'firebase/app';

import { Owner } from './models/owner';
import { collectionName } from './constants/collections';

const findOwner = async (db: firebase.firestore.Firestore, uid: string) => {
  let theOwner: Owner | null = null;
  const ownerDoc = await db.collection(collectionName.owners).doc(uid).get();

  if (ownerDoc.exists) {
    const owner = ownerDoc.data() as Owner;
    theOwner = { ...owner, id: owner.id };
  }

  return theOwner;
};

export default findOwner;
