import { Button, Image, Modal, TextInput, View } from "react-native";

import { styles } from "../styles";
import { useState } from "react";

function GoalInput(props) {
  const [courseGoalText, setCourseGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setCourseGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(courseGoalText);
    setCourseGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={courseGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#b180f0"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
