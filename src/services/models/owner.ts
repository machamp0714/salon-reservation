import firebase from 'firebase/app';

export type Owner = {
  id?: string;
  displayName: string | null;
  photoUrl: string | null;
  createdAt: firebase.firestore.Timestamp | null;
  updatedAt: firebase.firestore.Timestamp | null;
};

export const blankOwner = {
  displayName: null,
  photoUrl: null,
  createdAt: null,
  updatedAt: null,
};
