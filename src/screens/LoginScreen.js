import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const handleExit = () => {
    // Code to exit the app
  };

  const handleRegister = () => {
    // Code to navigate to the signup page (to be implemented later)
  };

  const handleSubmit = () => {
    // Logic for handling form submission (login)
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Account Number"
          // onChangeText={(text) => handleAccountNumberChange(text)}
          // value={accountNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          // onChangeText={(text) => handlePasswordChange(text)}
          // value={password}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <View style={styles.footer}>
        <Button title="Exit" onPress={handleExit} />
        <Button title="Register" onPress={handleRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Login;
