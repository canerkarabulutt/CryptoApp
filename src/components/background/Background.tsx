import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface LinearGradientComponentProps {
  children: React.ReactNode;
}

export const Background: React.FC<LinearGradientComponentProps> = ({ children }) => {
  return (
    <LinearGradient colors={['#10A9B0', '#6E21D1']} style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

