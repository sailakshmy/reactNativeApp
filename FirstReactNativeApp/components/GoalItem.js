import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ goalData, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler.bind(this, goalData?.item?.id)}
        style={({ pressed }) => pressed && styles.pressedGoal}
      >
        <Text style={styles.goalText}>{goalData.item.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedGoal: {
    opacity: 0.5,
    color: "#210644",
  },
});
export default GoalItem;
