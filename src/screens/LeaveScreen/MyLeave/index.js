import React from "react";
import { Text, View } from "react-native";
import LeaveDashboard from "./LeaveDashboard";
import UpcomingList from "./UpcomingList";

const MyLeaveTab = () => {
  return (
    <View>
      <LeaveDashboard />
      <UpcomingList />
    </View>
  );
};

export default MyLeaveTab;
