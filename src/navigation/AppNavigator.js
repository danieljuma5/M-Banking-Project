// AppNavigator.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import UserRegistration from '../screens/UserRegistrationScreen';
import BankServices from '../screens/BankServicesScreen';
import Deposit from '../screens/services/DepositScreen';
import BalanceEnquiry from '../screens/services/BalanceEnquiryScreen';
import StopCheque from '../screens/services/StopChequeScreen';
import ChangePin from '../screens/services/ChangePinScreen';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Registration' component={UserRegistration} />
      <Stack.Screen name='Services' component={BankServices} />
      <Stack.Screen name='Deposit' component={Deposit} />
      <Stack.Screen name='Balance' component={BalanceEnquiry} />
      <Stack.Screen name='StopCheque' component={StopCheque} />
      <Stack.Screen name='ChangePin' component={ChangePin} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
