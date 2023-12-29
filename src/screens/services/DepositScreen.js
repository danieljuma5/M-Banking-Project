import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Deposit = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleDeposit = () => {
    if (!amount || isNaN(amount)) {
      // Validate amount
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }
  
    Alert.alert(
      'Confirm Deposit',
      `Are you sure you want to deposit Ksh.${amount}?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            // Logic to handle the deposit action with the 'amount' value
            // For example: Call an API to process the deposit
            console.log('Deposited amount:', amount);
          },
        },
      ],
      { cancelable: true }
    );
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deposit</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={text => setAmount(text)}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDeposit}>
          <Text>Ok</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Deposit;
