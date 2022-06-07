import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import Location from'./components/Location';

export default function App() {
  return (
    <View style={styles.container}>
       <Form />
       <Location />

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
});
