import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { BackHandler } from 'react-native'

const UserRegistration = ({navigation}) => {
  useEffect(() =>{
    const backAction = () => {
      navigation.goBack();
      return true;
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  },[navigation])
  return (
    <View>
      <Text>UserRegistration</Text>
    </View>
  )
}

export default UserRegistration

const styles = StyleSheet.create({})