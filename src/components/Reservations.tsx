import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Reservation } from '../services/models/reservation';

interface ReservationsProps {
  reservations: Reservation[];
}

const Reservations: FC<ReservationsProps> = ({ reservations }) => {
  return (
    <View>
      {reservations.map((reservation) => (
        <Text key={reservation.id}>{reservation.customerLastName}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Reservations;
