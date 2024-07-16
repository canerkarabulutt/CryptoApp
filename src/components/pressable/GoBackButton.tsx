import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const GoBackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={24} color="#FFFFFF" />
      <Text style={styles.text}>Activity</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 28,
    marginLeft: 22,
    color: '#FFFFFF',
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
