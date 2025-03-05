import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showInputModal, setShowInputModal] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((previousGoals) =>
      previousGoals?.filter((goal) => goal?.id !== id)
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={() => setShowInputModal(true)}
          color="#a065ec"
        />

        <GoalInput
          addGoalHandler={addGoalHandler}
          setShowInputModal={setShowInputModal}
          showInputModal={showInputModal}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            keyExtractor={(item, index) => item?.id}
            renderItem={(goalData) => (
              <GoalItem
                goalData={goalData}
                deleteGoalHandler={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
