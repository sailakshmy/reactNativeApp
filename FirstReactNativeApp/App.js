// import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
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
        <TextInput style={styles.textInput} placeholder="Your course goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals </Text>
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
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
