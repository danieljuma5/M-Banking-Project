import {StyleSheet , View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  return (
    <View>
      <Text style={styles.container}>Hapa ni wapi</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home