import React, { useState } from 'react';
import { Text, StyleSheet, FlatList, View, Button } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const rgbCreator = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View>
      <Button onPress={() => setColors([...colors, rgbCreator()])} title='Add color'></Button>
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={styles.flex}>
              <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
              <Text style={styles.flexRow}>{item}</Text>
            </View>
          );
        }}
        keyExtractor={item => item}
      ></FlatList>
      {/* {console.log(colors)} */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 50
  },
  flex: {
    display: 'flex'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default ColorScreen;
