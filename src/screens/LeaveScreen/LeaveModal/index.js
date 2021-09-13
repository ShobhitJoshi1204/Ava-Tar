import React from "react";
import { Text, View, StyleSheet, Pressable, Picker } from "react-native";
import ModalComponent from "../../../../utils/Modal";
import DatePicker from "../../../../utils/DatePicker";
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Icon,
} from "native-base";
import { Entypo } from "@expo/vector-icons";

const LeaveModal = (props) => {
  const { showModal, setShowModal, handleModalConfirm } = props;

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [openstartDate, setOpenStartDate] = React.useState(false);
  const [openEndDate, setOpenEndDate] = React.useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = React.useState("");

  const handleStartDate = (startdate) => {
    setOpenStartDate(false);
    setStartDate(startdate || new Date());
  };
  const handleEndDate = (enddate) => {
    setOpenEndDate(false);
    setEndDate(enddate || new Date());
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ModalComponent showModal={showModal} setShowModal={setShowModal}>
          <View>
            <View style={styles.headerView}>
              <Text style={styles.headText}>Apply leave</Text>
              <Pressable
                onPress={() => {
                  setShowModal(!showModal);
                }}
                style={styles.headButton}
              >
                <Icon size="md" as={<Entypo name="cross" />} color="black" />
              </Pressable>
            </View>
            <View>
              <View style={styles.startDateView}>
                <Text style={styles.startDateHeadText}>To</Text>
                <Pressable
                  onPress={() => {
                    setOpenStartDate(true);
                  }}
                  style={{ borderWidth: 1, borderColor: "#059bd2" }}
                >
                  <Text style={styles.startDateText}>
                    {startDate.toLocaleDateString()}
                  </Text>
                </Pressable>

                {openstartDate ? (
                  <DatePicker
                    date={startDate}
                    onHandleChange={handleStartDate}
                  />
                ) : null}
              </View>
            </View>

            <View>
              <View style={styles.endDateView}>
                <Text style={styles.endDateHeadText}>From</Text>
                <Pressable
                  onPress={() => {
                    setOpenEndDate(true);
                  }}
                  style={{ borderWidth: 1, borderColor: "#059bd2" }}
                >
                  <Text style={styles.endDateText}>
                    {endDate.toLocaleDateString()}
                  </Text>
                </Pressable>

                {openEndDate ? (
                  <DatePicker date={endDate} onHandleChange={handleEndDate} />
                ) : null}
              </View>
            </View>

            <VStack alignItems="center" space={4} style={styles.dropdownView}>
              <Select
                selectedValue={selectedLeaveType}
                minWidth={200}
                accessibilityLabel="Select leave type"
                placeholder="Select leave type"
                onValueChange={(itemValue) => setSelectedLeaveType(itemValue)}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                <Select.Item label="Casual leave" value="casual" />
                <Select.Item label="Sick leave" value="sick" />
                <Select.Item label="Optional leave" value="optional" />
              </Select>
            </VStack>

            <Pressable
              style={styles.confirmBox}
              onPress={() => {
                handleModalConfirm(startDate, endDate, selectedLeaveType);
              }}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </Pressable>
          </View>
        </ModalComponent>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  headerView: {
    display: "flex",
    flexDirection: "row",
  },
  headButton: {
    flex: 1,
    paddingRight: 20,
    marginVertical: 10,
    position: "absolute",
    right: 0,
  },
  headText: {
    flex: 8,
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  confirmText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
  },
  confirmBox: {
    backgroundColor: "#059bd2",
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 30,
  },
  startDateText: { padding: 10, fontSize: 20 },
  startDateHeadText: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 13,
  },
  startDateView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  endDateText: { padding: 10, fontSize: 20 },
  endDateHeadText: {
    paddingRight: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  endDateView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  dropdownLabel: {
    fontSize: 20,
    marginVertical: 10,
    marginRight: 12,
  },
  dropdownView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default LeaveModal;
