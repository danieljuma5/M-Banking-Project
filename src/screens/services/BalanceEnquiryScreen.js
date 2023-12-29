import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BalanceEnquiry = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOK = () => {
    navigation.goBack(); // Navigate to the previous screen (Bank Services)
  };

  // Replace these with actual user data retrieved from your storage or API
  const userData = {
    name: 'John Doe',
    accountNumber: '1234567890',
    balance: '$5000', // Or use a numeric value and format it appropriately
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Information</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userData.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Account Number:</Text>
        <Text style={styles.value}>{userData.accountNumber}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Balance:</Text>
        <Text style={styles.value}>{userData.balance}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOK}>
          <Text>OK</Text>
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
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default BalanceEnquiry;
