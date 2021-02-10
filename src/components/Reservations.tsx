import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Reservation } from '../services/models/reservation';

interface ReservationsProps {
  reservations: Reservation[];
}

const Reservations: FC<ReservationsProps> = ({ reservations }) => {
  return (
    <View style={styles.container}>
      {reservations.map((reservation) => (
        <Text
          key={reservation.id}
          numberOfLines={1}
          ellipsizeMode="clip"
          style={[
            styles.label,
            {
              backgroundColor: reservation.color,
              borderColor: reservation.color,
            },
          ]}
        >
          {reservation.customerFirstName} {reservation.customerLastName}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    overflow: 'hidden',
    marginBottom: 2,
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default Reservations;
