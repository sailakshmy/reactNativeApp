import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ goalData, deleteGoalHandler }) {
  return (
    <Pressable onPress={deleteGoalHandler.bind(this, goalData?.item?.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goalData.item.text}</Text>
      </View>
    </Pressable>
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
