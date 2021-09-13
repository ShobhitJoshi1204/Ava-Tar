import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from './components/ImageDetail';

const ComponentScreen = () => {
  return (
    <View style={styles.boxParent}>
      <View style={styles.boxStyleOne}></View>
      <View style={styles.boxStyleTwo}></View>
      <View style={styles.boxStyleThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  boxParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxStyleOne: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  boxStyleTwo: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    position: 'relative',
    top: 50
  },
  boxStyleThree: {
    height: 50,
    width: 50,
    backgroundColor: 'blue'
  }
});

export default ComponentScreen;
