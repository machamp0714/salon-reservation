import firebase from 'firebase/app';

export type Owner = {
  id?: string;
  familyName: string;
  givenName: string;
  name: string;
  photoUrl: string;
  createdAt: firebase.firestore.Timestamp | null;
  updatedAt: firebase.firestore.Timestamp | null;
};
