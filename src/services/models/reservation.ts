import firebase from 'firebase/app';

export type Reservation = {
  id?: string;
  startDate: firebase.firestore.Timestamp;
  endDate: firebase.firestore.Timestamp;
  color: string;
  customerFirstName: string;
  customerLastName: string;
  ownerId: string;
  createdAt: firebase.firestore.Timestamp | null;
  updatedAt: firebase.firestore.Timestamp | null;
};
