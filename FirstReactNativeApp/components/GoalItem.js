import { StyleSheet, Text, View } from "react-native";

function GoalItem({ goalData }) {
  return (
    <View
      style={styles.goalItem}
      // key={goal}
    >
      <Text style={styles.goalText}>{goalData.item.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
export default GoalItem;
