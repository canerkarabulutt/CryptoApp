// React Imports
import React, {FC} from 'react';

// React Native Imports
import {SafeAreaView} from 'react-native';

// Features Imports
import {Auth} from './src/features/auth';

// Package Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/features/auth/Login';
import { PrivacyPolicy } from './src/features/auth/PrivacyPolicy';
import { HomeScreen } from './src/features/screens';
import { Activity } from './src/features/details';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Activity" component={Activity} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
