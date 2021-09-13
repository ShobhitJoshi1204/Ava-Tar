import React from "react";
import StoreApi from "../../utils/storeApi";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <StoreApi.Provider
    // value={}
    >
      <View>
        <Text style={styles.text}>This is the beginning!!!!!</Text>
        <Button
          onPress={() => {
            navigation.navigate("Component");
          }}
          title="Go to component screen"
        ></Button>
        <Button
          onPress={() => {
            navigation.navigate("List");
          }}
          title="Go to List screen"
        ></Button>
        <Button
          onPress={() => {
            navigation.navigate("Colors");
          }}
          title="Go to Color screen"
        ></Button>
        <Button
          onPress={() => {
            navigation.navigate("Layout");
          }}
          title="Go to Box layout screen"
        ></Button>
        <Button
          onPress={() => {
            navigation.navigate("Leaves");
          }}
          title="Leave screen"
          options={{ title: "Leaves" }}
        ></Button>
      </View>
    </StoreApi.Provider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
