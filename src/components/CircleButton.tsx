import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

interface CircleButtonProps {
  width: number;
  height: number;
  color: string;
  size: number;
  icon: string;
  handlePress: () => void;
}

const CircleButton: FC<CircleButtonProps> = ({
  width,
  height,
  color,
  size,
  icon,
  handlePress,
}) => {
  const borderRadius = width / 2;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        width: width,
        height: height,
        borderColor: color,
        borderRadius: borderRadius,
      }}
      onPress={handlePress}
    >
      <Icon name={icon} type="font-awesome-5" color={color} size={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 5,
  },
});

export default CircleButton;
