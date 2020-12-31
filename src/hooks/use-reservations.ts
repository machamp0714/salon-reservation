import { useContext, useState, useEffect, useRef } from 'react';
import { collectionName } from '../services/constants';
import { Reservation } from '../services/models/reservation';
import { FirebaseContext, OwnerContext } from '../contexts';

const useReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const firebaseRef = useRef(useContext(FirebaseContext));
  const ownerRef = useRef(useContext(OwnerContext));

  useEffect(() => {
    const { owner } = ownerRef.current;
    const { db } = firebaseRef.current;
    if (!db) throw new Error('firebase is not initialized');

    const query = db
      .collection(collectionName.reservations)
      .where('ownerId', '==', owner!.id)
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
  }, []);

  return { reservations };
};

export default useReservations;
