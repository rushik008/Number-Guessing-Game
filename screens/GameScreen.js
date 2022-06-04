import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import Title from "../components/ui/Title.js";
import GuessedNumberContainer from "../components/Game/GuessedNumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton.js";

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

function GameScreen({ userNumberProp }) {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumberProp
  );

  const [currentNumber, setCurrentNumber] = useState(initialGuess);

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

      <View>
        <Text>HIGHER OR LOWER ?</Text>
        <View>
          <PrimaryButton onPressProp={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPressProp={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>

      <View>{/* guessed history / log */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    margin: 8,
    padding: 8,
  },
});
