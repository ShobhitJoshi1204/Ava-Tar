import React from "react";
import { Modal, View, StyleSheet, ImagePropTypes } from "react-native";

const ModalComponent = (props) => {
  const { showModal, setShowModal } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(!showModal);
      }}
    >
      <View style={styles.modalView}>{props.children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: "95%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 15,
    height: "100%",
  },
});

export default ModalComponent;
