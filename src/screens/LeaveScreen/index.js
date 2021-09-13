import React from "react";
import { Text, StyleSheet, View, Button, Pressable } from "react-native";
import TeamLeaveTab from "./TeamLeave";
import MyLeaveTab from "./MyLeave";

const LeaveScreen = () => {
  const [onTeamLeaveTab, setOnTeamLeaveTab] = React.useState(false);
  return (
    <View style={styles.screen}>
      <View style={styles.tabStyle}>
        <Pressable
          onPress={() => {
            setOnTeamLeaveTab(false);
          }}
        >
          <Text style={!onTeamLeaveTab ? styles.activeTab : styles.deactiveTab}>
            My leaves
          </Text>
        </Pressable>
        <Text style={styles.separator}>|</Text>
        <Pressable
          onPress={() => {
            setOnTeamLeaveTab(true);
          }}
        >
          <Text style={onTeamLeaveTab ? styles.activeTab : styles.deactiveTab}>
            Teammates
          </Text>
        </Pressable>
      </View>
      <View>{onTeamLeaveTab ? <TeamLeaveTab /> : <MyLeaveTab />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    fontSize: 40,
    backgroundColor: "#fff",
    height: "100%",
  },
  tabStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  separator: {
    marginHorizontal: 20,
  },
  activeTab: {
    color: "#000",
  },
  deactiveTab: {
    color: "#059bd2",
  },
});

export default LeaveScreen;
