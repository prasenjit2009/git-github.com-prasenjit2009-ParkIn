import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { STYLES, COLORS } from './Styles';
import ImagePicker from 'react-native-image-picker';

export default function SimpleImagePicker() {
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log({ response });

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };
        console.log({ source });
      }
    });
  }

  return (
    <View
      style={[
        STYLES.flex,
        STYLES.centerContainer,
        { backgroundColor: COLORS.primaryDark }
      ]}
    >
      <Text style={[STYLES.title, { color: COLORS.primaryLight }]}>
        Simple Image Picker
      </Text>
      <TouchableOpacity
        onPress={selectImage}
        style={[
          STYLES.selectButtonContainer,
          { backgroundColor: COLORS.primaryLight }
        ]}
      >
        <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
      </TouchableOpacity>
    </View>
  );
}

export const STYLES = StyleSheet.create({
    flex: {
      flex: 1
    },
    centerContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 22
    },
    // add below
    selectButtonContainer: {
      margin: 20,
      borderRadius: 5
    },
    selectButtonTitle: {
      padding: 10,
      fontSize: 18
    }
  });