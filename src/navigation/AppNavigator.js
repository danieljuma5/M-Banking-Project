// AppNavigator.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import UserRegistration from '../screens/UserRegistrationScreen';
import BankServices from '../screens/BankServicesScreen';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Registration' component={UserRegistration} />
      <Stack.Screen name='Services' component={BankServices} />
      {/* Other screens here */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
