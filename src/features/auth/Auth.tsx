import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Component Imports
import {Background, PressableButton} from '../../components';

export const Auth = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <>
    <Background>
        <View style={styles.headerTitle}>
          <Image
            source={require('../../assets/images/Group.png')}
            style={styles.image}
          />
        <Text style={styles.headerText}>Get Started</Text>

          <View style={styles.privacyPolicyView}>
          <Text style={styles.secondText}>
            Let's create your account
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Privacy Policy')}>
            <Text style={styles.privacyPolicy}>Privacy Policy</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.loginView}>
          <View>

            <PressableButton
              onPress={() => {}}
              label="Get Started"
              backgroundColor="#3D1273"
              width={315}
              height={56}
            />
          </View>
        </View>
        <View style={styles.createView}>
          <Text style={styles.createLabel}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.createButton}>Login!</Text>
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
    marginTop: 85.18,
    height: 61.18,
  },
  headerTitle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#3D1273',
    fontWeight: 'bold',
    marginTop: 37.64,
  },
  secondText: {
    fontSize: 14.67,
    fontWeight: '400',
    color: 'white',
    marginTop: 16,
  },
  privacyPolicyView: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  privacyPolicy: {
    marginTop: 16,
    color: '#00F0FF',
    fontSize: 14.67,
    marginLeft: 8,
  },
  inputView: {
    marginTop: 46,
    paddingHorizontal: 31,
  },
  label: {
    marginBottom: 2,
    fontSize: 13.33,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 14.67,
    marginTop: 2,
    marginBottom: 10.67,
    height: 48,
    borderRadius: 10,
    padding: 13,
    color: 'white',
    fontWeight: 'semibold',
    backgroundColor: '#3A3E6E',
  },
  loginView: {
    marginTop: 26.6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  createView: {
    marginTop: 74.66,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  createLabel: {
    fontSize: 14.67,
    color: 'white',
  },
  createButton: {
    color: '#00F0FF',
    fontSize: 14.67,
    marginLeft: 8,
  },
});

