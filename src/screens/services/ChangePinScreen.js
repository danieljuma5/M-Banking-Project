import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChangePin = () => {
  const navigation = useNavigation();
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmNewPin, setConfirmNewPin] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleChangePin = () => {
    if (newPin.length === 0 || newPin.length !== 4) {
      Alert.alert('Error', 'New pin must be 4 characters long');
      return;
    }

    if (newPin !== confirmNewPin) {
      Alert.alert('Error', 'New pin and confirm pin do not match');
      return;
    }

    // Perform logic to change the pin here (e.g., API call or other actions)
    // Assuming successful change, display success message
    Alert.alert('Success', 'Pin changed successfully');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change PIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Old PIN"
        secureTextEntry
        value={oldPin}
        onChangeText={(text) => setOldPin(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="New PIN"
        secureTextEntry
        value={newPin}
        onChangeText={(text) => setNewPin(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New PIN"
        secureTextEntry
        value={confirmNewPin}
        onChangeText={(text) => setConfirmNewPin(text)}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleChangePin}>
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
    paddingHorizontal: 20,
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
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default ChangePin;
