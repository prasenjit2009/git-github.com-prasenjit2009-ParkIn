import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity } from 'react-native';
import Form from './components/Form';
import chooseImage from './components/imaging';

export default function App() {

  
  return (
  
    <View style={styles.container}>
       <View>
       <Form />
       </View>
       <View>
        <chooseImage/>
       </View>
       
       
    </View>

    
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#006400',
    paddingLeft:60,
    paddingRight: 60,
  },
  btntext: {
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 15,
    color: '#006400',
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    borderColor: '#f8f8f8',
    borderWeight: 5,
    marginTop: 30,
  }
});
