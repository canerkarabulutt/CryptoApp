import {View, Text, Pressable, StyleSheet, GestureResponderEvent} from 'react-native';
import React from 'react';


interface PressableButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  label: string;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
}

export const PressableButton: React.FC<PressableButtonProps>  = ({ onPress, label, backgroundColor, textColor ,width, height }) => {
  return (
    <Pressable 
      style={[styles.button, { backgroundColor: backgroundColor || 'purple', width: width || 200, height: height || 50 }]} 
      onPress={onPress}
    >
      <Text style={[styles.buttonLabel, { color: textColor || 'white' }]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({ 
  button: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  buttonLabel: {
    color: 'pink',
    fontSize: 13.33,
    fontWeight: 'bold',
  },
})
