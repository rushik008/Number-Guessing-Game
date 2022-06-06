import { View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title.js";
import GuessedNumberContainer from "../components/Game/GuessedNumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton.js";
import Card from "../components/ui/Card.js";
import InstructionText from "../components/ui/InstructionText.js";

function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumberProp, onGameOverProp }) {
  const initialGuess = generateRandomNumber(1, 100, userNumberProp);
  const [currentNumber, setCurrentNumber] = useState(initialGuess);

  useEffect(() => {
    if (currentNumber === userNumberProp) {
      onGameOverProp();
    }
  }, [currentNumber, userNumberProp, onGameOverProp]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentNumber < userNumberProp) ||
      (direction === "greater" && currentNumber > userNumberProp)
    ) {
      Alert.alert("You lied!", "Be honest dear...", [
        { text: "Sorry !", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentNumber;
    } else {
      minBoundary = currentNumber + 1;
    }
    const nextRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentNumber
    );
    setCurrentNumber(nextRandomNumber);
  }

  return (
    <View style={styles.gameScreenContainer}>
      <Title>Computer's Choice</Title>

      <GuessedNumberContainer>{currentNumber}</GuessedNumberContainer>

      <Card>
        <InstructionText>HIGHER OR LOWER ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonStyle}>
            <PrimaryButton onPressProp={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={15} color="cornsilk" />
            </PrimaryButton>
          </View>

          <View style={styles.singleButtonStyle}>
            <PrimaryButton onPressProp={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={15} color="cornsilk" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View>{/* guessed history / log */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    marginTop: 120,
    padding: 8,
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

export default GameScreen;
