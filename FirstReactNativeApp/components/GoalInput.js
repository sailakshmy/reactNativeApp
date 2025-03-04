import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInputHandler(valueFromTextField) {
    setEnteredGoal(valueFromTextField);
  }

  const onClickAddGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoal}
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={onClickAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
