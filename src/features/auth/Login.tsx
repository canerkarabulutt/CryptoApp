import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// Component Imports
import {Background, PressableButton} from '../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const Login = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <>
    <Background>
        <View style={styles.headerTitle}>
          <Image
            source={require('../../assets/images/Group52.png')}
            style={styles.image}
          />
          <Text style={styles.headerText}>Welcome back!</Text>
          <Text style={styles.secondText}>
            Enter your mobile number to login.
          </Text>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.loginView}>
          <View>

            <PressableButton
              onPress={() => {}}
              label="QR"
              backgroundColor="#3D1273"
              width={56}
              height={56}
            />
          </View>

          <PressableButton
            onPress={() => {}}
            label="Send Code"
            backgroundColor="#3D1273"
            width={240}
            height={56}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textLabel}>New User?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
            <Text style={styles.textButton}>Get Started!</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3462',
  },
  image: {
    marginTop: 80,
    height: 167.6
  },
  headerTitle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22.5,
    color: '#3D1273',
    fontWeight: 'bold',
    marginTop: 16.4,
  },
  secondText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    marginTop: 16,
  },
  inputView: {
    marginTop: 46,
    paddingHorizontal: 31,
  },
  label: {
    marginBottom: 2,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 15,
    marginTop: 2,
    marginBottom: 26.6,
    height: 48,
    borderRadius: 10,
    padding: 13,
    color: 'white',
    fontWeight: 'semibold',
    backgroundColor: '#3A3E6E',
  },
  loginView: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  textView: {
    marginTop: 26,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textLabel: {
    fontSize: 14.67,
    color: 'white',
  },
  textButton: {
    color: '#00F0FF',
    fontSize: 14.67,
    marginLeft: 8,
  },
});
