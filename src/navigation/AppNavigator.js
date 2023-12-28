// AppNavigator.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import UserRegistration from '../screens/UserRegistrationScreen';
import BankServices from '../screens/BankServicesScreen';
import Deposit from '../screens/services/DepositScreen';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Registration' component={UserRegistration} />
      <Stack.Screen name='Services' component={BankServices} />
      <Stack.Screen name='Deposit' component={Deposit} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
