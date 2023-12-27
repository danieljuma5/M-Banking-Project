import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, BackHandler } from 'react-native';

const UserRegistration = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [navigation]);

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleSubmit = () => {
    // Logic to handle form submission (registration)
    // You can access form values using firstName, lastName, accountNumber, pin states
    // For example: Send API request to register user
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Account Number"
          value={accountNumber}
          onChangeText={text => setAccountNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="PIN"
          secureTextEntry
          value={pin}
          onChangeText={text => setPin(text)}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <View style={styles.footer}>
        <Button title="Back" onPress={handleBack} />
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

export default UserRegistration;
