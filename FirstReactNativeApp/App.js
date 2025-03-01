// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(valueFromTextField) {
    setEnteredGoal(valueFromTextField);
    // console.log("Value", valueFromTextField);
  }

  const addGoalHandler = () => {
    // console.log("enteredText", enteredGoal);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoal,
    ]);
  };
  return (
    <View
      style={styles.appContainer}
      // style={styles.container}
    >
      {/* <View>
        <Text style={styles.dummyText}>Hello World!!</Text>
      </View>
      <Text
        style={styles.dummyText}
        // style={{ margin: 16, borderWidth: 2, borderColor: "red", padding: 16 }}
      >
        Hello World!! Also
      </Text>
      <Button title="Click me" /> */}
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals </Text>
        {courseGoals?.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // dummyText: { margin: 16, borderWidth: 2, borderColor: "red", padding: 16 },
  appContainer: {
    // padding: 50,
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 5,
  },
});
