import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Component Imports
import {Background, PressableButton} from '../../components';

export const PrivacyPolicy = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <>
    <Background>
      <View style={styles.buttonView}>
        <View>
          <PressableButton
            onPress={() => {}}
            label="Utility"
            backgroundColor="#3D1273"
            width={120}
            height={32}
          />
        </View>
        <PressableButton
          onPress={() => {}}
          label="Description"
          backgroundColor="#3D1273"
          width={120}
          height={32}
        />
      </View>
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/images/privacy.png')}
          />
        </View>
        <View style={styles.privacyView}>
        <Image
            source={require('../../assets/images/descr.png')}
          />
          <View style={styles.privacyInfoView}>
          <Image
            source={require('../../assets/images/descl.png')}
            style={styles.imageSpacing}
          />
            <Image
            source={require('../../assets/images/desr.png')}
            style={styles.imageSpacing}
          />
          </View>
      </View>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    marginTop: 138,
    justifyContent: 'space-around',
    marginRight: 60,
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  imageView: {
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: -48,
  },
  privacyView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  privacyInfoView: {
    marginTop: 34,
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  imageSpacing: {
    marginRight: 30,
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: 'red',
  },
});
