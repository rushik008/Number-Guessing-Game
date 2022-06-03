import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    padding: 8,
    marginHorizontal: 15,
    backgroundColor: "cornsilk",
    borderRadius: 8,
    elevation: 10,
    // for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  textInput: {
    height: 50,
    width: 60,
    paddingVertical: 8,
    marginBottom: 8,
    borderBottomColor: "darkred",
    borderBottomWidth: 2,
    // text color
    color: "darkred",
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
