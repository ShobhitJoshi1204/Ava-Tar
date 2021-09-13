import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ date, onHandleChange }) => {
  return (
    <DateTimePicker
      value={date}
      mode={"date"}
      is24Hour={true}
      display="default"
      onChange={(e, selectedDate) => {
        onHandleChange(selectedDate);
      }}
    />
  );
};

export default DatePicker;
