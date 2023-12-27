import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BankServices = () => {
  const navigation = useNavigation();

  const handleDeposit = () => {
    // Navigation or logic for Deposit service
    // For example: navigation.navigate('DepositScreen');
  };

  const handleBalanceEnquiry = () => {
    // Navigation or logic for Balance Enquiry service
    // For example: navigation.navigate('BalanceEnquiryScreen');
  };

  const handleStopCheque = () => {
    // Navigation or logic for Stop Cheque service
    // For example: navigation.navigate('StopChequeScreen');
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
