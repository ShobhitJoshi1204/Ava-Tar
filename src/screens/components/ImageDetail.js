import React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, imgScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{imgScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageDetail;
