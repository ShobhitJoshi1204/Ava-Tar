import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from './components/ImageDetail';

const ComponentScreen = () => {
  return (
    <View>
      <ImageDetail imageSource={require('../../assets/beach.jpg')} title='Beach' imgScore='90' />
      <ImageDetail imageSource={require('../../assets/forest.jpg')} title='Forest' imgScore='80' />
      <ImageDetail
        imageSource={require('../../assets/mountain.jpg')}
        title='Mountain'
        imgScore='70'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentScreen;
