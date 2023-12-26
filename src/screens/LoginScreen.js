// LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Logic for handling login
    // Navigate to the home/dashboard upon successful login
    navigation.navigate('Home'); // Replace 'Home' with your desired screen name
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
