import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';

export default function Form() {
  return (
    <View style={styles.container}>
       <Text style={styles.header}>Registration</Text>
       <TextInput style={styles.UserName} placeholder="User Name" underlineColorAndroid={'transparent'} />
       <TextInput style={styles.UserName} placeholder="Description" underlineColorAndroid={'transparent'} />
       <TouchableOpacity style={styles.button}>
         <Text style={styles.btntext}>SUBMIT</Text>
       </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
  header: {
    color: '#fffafa',
    marginLeft:100,
    
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomColor: '#fffafa',
    borderBottomWidth: 1,
  },
  UserName: {
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    height: 40,
    borderBottomWidth: 1,
    marginLeft: 100,
    marginTop: 50,
    
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    borderColor: '#f8f8f8',
    borderWeight: 5,
    marginTop: 30,
  },
  btntext: {
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 15,
    color: '#006400',
  },
});


