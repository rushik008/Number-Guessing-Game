import { useState } from "react";
import { View, SafeAreaView, TextInput, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton.js";
import Title from "../components/ui/Title.js";
import Colors from "../constants/Colors";
import Card from "../components/ui/Card.js";
import InstructionText from "../components/ui/InstructionText.js";

function StartGameScreen({ onPickNumberProp }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Entry!", "The number must be between 1 to 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumberProp(chosenNumber);
  }

  return (
    <View style={styles.rootScreenContainer}>
      <Title>Guess My Number Game</Title>
      <Card>
        <InstructionText>
          Enter a Number to be Guessed by Computer
        </InstructionText>

        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonStyle}>
            <PrimaryButton onPressProp={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.singleButtonStyle}>
            <PrimaryButton onPressProp={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  textInput: {
    height: 50,
    width: 60,
    paddingVertical: 8,
    marginBottom: 8,
    borderBottomColor: Colors.primary800,
    borderBottomWidth: 2,
    color: Colors.primary800,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  singleButtonStyle: {
    flex: 1,
  },
});

export default StartGameScreen;
