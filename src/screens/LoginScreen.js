import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, BackHandler, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const Login = () => {
  const navigation = useNavigation();
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (showExitModal) {
        setShowExitModal(false);
        return true;
      }
      setShowExitModal(true);
      return true;
    });

    return () => backHandler.remove();
  }, [showExitModal]);

  const handleExitConfirmation = () => {
    Alert.alert(
      'Exit Application',
      'Are you sure you want to exit the application?',
      [
        {
          text: 'Cancel',
          onPress: () => setShowExitModal(false),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => handleExit() },
      ],
      { cancelable: true }
    );
  };

  const handleExit = () => {
    BackHandler.exitApp();
  };

  const handleRegister = () => {
    // Code to navigate to the signup page 
    navigation.navigate('Registration')
  };

  const handleSubmit = () => {
    // Logic for handling form submission (login)
    navigation.navigate('Services')
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
          placeholder="PIN"
          secureTextEntry
          // onChangeText={(text) => handlePasswordChange(text)}
          // value={password}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      {showExitModal && (
        <View style={styles.exitModal}>
          <Text style={styles.modalText}>Are you sure you want to exit the application?</Text>
          <Button title="Yes" onPress={handleExit} />
          <Button title="No" onPress={() => setShowExitModal(false)} />
        </View>
      )}
      <View style={styles.footer}>
        <Button title="Exit" onPress={handleExitConfirmation} />
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
  exitModal: {
    position: 'absolute',
    top: '40%',
    left: '15%',
    width: '70%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Login;
