import React,{useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,BackHandler,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BankServices = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      showAlert();
      return true;
    });

    return () => backHandler.remove();
  }, []);

  const showAlert = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleDeposit = () => {
    navigation.push('Deposit');
  };


  const handleBalanceEnquiry = () => {
    // Navigation or logic for Balance Enquiry service
    navigation.navigate('Balance');
  };

  const handleStopCheque = () => {
    // Navigation or logic for Stop Cheque service
    navigation.navigate('StopCheque');
  };

  const handleChangePin = () => {
    // Navigation or logic for Change PIN service
    // For example: navigation.navigate('ChangePinScreen');
  };

  const handleFinancialServices = () => {
    // Navigation or logic for Financial Services
    // For example: navigation.navigate('FinancialServicesScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.serviceLink} onPress={handleDeposit}>
        <Text>Deposit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceLink} onPress={handleBalanceEnquiry}>
        <Text>Balance Enquiry</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceLink} onPress={handleStopCheque}>
        <Text>Stop Cheque</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceLink} onPress={handleChangePin}>
        <Text>Change PIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceLink} onPress={handleFinancialServices}>
        <Text>Financial Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceLink: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default BankServices;
