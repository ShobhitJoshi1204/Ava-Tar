import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const HomeScreen = () => {
  const friends = [
    { name: 'abhishek' },
    { name: 'jain' },
    { name: 'john' },
    { name: 'dagget' },
    { name: 'abhishek1' },
    { name: 'jain1' },
    { name: 'john1' },
    { name: 'dagget1' }
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item.name}</Text>;
      }}
      keyExtractor={friend => friend.name}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 50
  }
});

export default HomeScreen;
