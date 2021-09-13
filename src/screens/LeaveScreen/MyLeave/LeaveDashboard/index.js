import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import LeaveModal from "../../LeaveModal";

const LeaveDashboard = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleModalConfirm = (startDate, endDate, leaveType) => {
    // call api to apply leave
    console.log(startDate, endDate, leaveType);
  };

  return (
    <View>
      <View style={styles.screen}>
        <View style={styles.compAlignment}>
          <View>
            <Text style={styles.textStyle}>10 Sick leave</Text>
            <Text style={styles.textStyle}>5 Casual leave</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>2 Optional leave</Text>
            <Text style={styles.textStyle}>5 Casual leave</Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Button
              title="Apply"
              onPress={() => {
                setShowModal(true);
              }}
            ></Button>
          </View>
        </View>
      </View>
      {showModal ? (
        <LeaveModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleModalConfirm={handleModalConfirm}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fafafa",
  },
  textStyle: {
    marginVertical: 10,
    fontWeight: "bold",
  },
  compAlignment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
});

export default LeaveDashboard;
