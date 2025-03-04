import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, setShowInputModal, showInputModal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInputHandler(valueFromTextField) {
    setEnteredGoal(valueFromTextField);
  }

  const onClickAddGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
    setShowInputModal(false);
  };
  return (
    <Modal visible={showInputModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onClickAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => setShowInputModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    flex: 1,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "25%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
