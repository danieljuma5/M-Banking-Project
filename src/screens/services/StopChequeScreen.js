import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StopCheque = () => {
  const navigation = useNavigation();
  const [chequeNumber, setChequeNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleStopCheque = () => {
    if (!chequeNumber || isNaN(chequeNumber)) {
      Alert.alert('Error', 'Please enter a valid Cheque number');
      return;
    }

    Alert.alert(
      'Confirm Stop Cheque',
      `Are you sure you want to Stop Cheque with Cheque No. ${chequeNumber} `,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            handleConfirm();
            console.log(`Cheque Number ${chequeNumber} stopped.`);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  return (
    <View style={styles.container}>
      {!confirmed ? (
        <View>
          <Text style={styles.title}>Stop Cheque</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter cheque number"
            keyboardType="numeric"
            value={chequeNumber}
            onChangeText={(num) => setChequeNumber(num)}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={handleStopCheque}>
              <Text>Ok</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleBack}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.confirmationContainer}>
          <Text style={[styles.confirmationText, styles.stoppedText]}>
            {`Cheque with number ${chequeNumber} stopped`}
          </Text>
          <TouchableOpacity style={styles.confirmationButton} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
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
  confirmationContainer: {
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  stoppedText: {
    color: 'red', // Change color as needed
  },
  confirmationButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'auto',
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default StopCheque;
