import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import CircleButton from './CircleButton';

const AddReservationModal: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <CircleButton
        width={45}
        height={45}
        color="#4D7D6D"
        size={15}
        icon="plus"
        handlePress={() => setIsVisible(true)}
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
