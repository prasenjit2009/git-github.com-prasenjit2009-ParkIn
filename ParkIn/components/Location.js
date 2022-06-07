import React, { useState } from 'react';
import {StyleSheet, View, Text, Button, Linking} from 'react-native';
import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: null,
})


const Location = ({url}) => {

  [viewLocation, isViewLocation] = useState([])

  const [tweet, setTweet] = useState([viewLocation.longitude, viewLocation.latitude]);

  const tweetLocation = () => {
     let twitterParams = [];

     try {
      if (tweet)
      twitterParams.push('text=' + encodeURI(tweet));

      const url = 'https://twitter.com/intent/tweet?' + twitterParams.join('&');
    
      Linking.openURL(url)
     } catch (error) {
                        alert('Something went wrong');
                    } 
    }    

  const getLocation = async () => {
    
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse' // or 'fine'
      }
    });
  
    console.log(permission)

    let location;
    if(!permission) {
      permission = await RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "coarse",
          rationale: {
            title: "We need to access your location",
            message: "We use your location to show where you are on the map",
            buttonPositive: "OK",
            buttonNegative: "Cancel"
          }
        }
      })
      console.log(permission)
      location = await RNLocation.getLatestLocation({timeout: 100})
      console.log(location)
      isViewLocation(location)
      
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100})
      console.log(location)
      isViewLocation(location)
      setTweet([viewLocation.longitude, viewLocation.latitude])
    }
  }
  

  return (
    <View style={styles.container}>
      <Text>React Native Geolocation</Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" 
        onPress={getLocation} style={styles.button}
        />
      </View>
      <Text>Latitude: {viewLocation.latitude} </Text>
      <Text>Longitude: {viewLocation.longitude} </Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button
          title="Send Location"
          onPress={tweetLocation} style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default Location;