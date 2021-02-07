import { useContext, useState, useEffect, useRef } from 'react';
import { collectionName } from '../services/constants/collections';
import { Reservation } from '../services/models/reservation';
import { FirebaseContext, OwnerContext } from '../contexts';

type ReservationOptions = {
  year: number;
  month: number;
  day: number;
};
const defaultOptions = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDay(),
};

const useReservations = (options?: ReservationOptions) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const firebaseRef = useRef(useContext(FirebaseContext));
  const ownerRef = useRef(useContext(OwnerContext));
  const optionsRef = { ...defaultOptions, ...options };

  useEffect(() => {
    const { owner } = ownerRef.current;
    const { db } = firebaseRef.current;
    if (!owner) throw new Error('Not Authorized!');
    if (!db) throw new Error('firebase is not initialized');

    const startAt = new Date(
      optionsRef.year,
      optionsRef.month - 1,
      optionsRef.day,
    );
    const endAt = new Date(
      optionsRef.year,
      optionsRef.month - 1,
      optionsRef.day,
      23,
      59,
    );

    const query = db
      .collection(collectionName.reservations)
      .where('ownerId', '==', owner.id)
      .where('startDate', '>=', startAt)
      .where('startDate', '<=', endAt)
      .orderBy('startDate', 'desc');

    const load = async () => {
      const snap = await query.get();
      const reservationsData: Reservation[] = snap.docs.map((doc) => ({
        ...(doc.data() as Reservation),
        id: doc.id,
      }));
      setReservations(reservationsData);
    };

    load();
  }, [optionsRef.year, optionsRef.month, optionsRef.day]);

  return { reservations };
};

export default useReservations;
