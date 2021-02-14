import React, { FC, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddReservationModal: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <Button
        icon={<Icon name="plus" size={15} />}
        onPress={() => setIsVisible(true)}
      />
      <View>
        <Modal isVisible={isVisible}>
          <View>
            <Text>Hi! React Native Modal!</Text>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default AddReservationModal;
