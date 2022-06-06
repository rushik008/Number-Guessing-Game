import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  useFonts({
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "anton-regular": require("./assets/fonts/Anton-Regular.ttf"),
    "harland-roselyn": require("./assets/fonts/Harland-Roselyn.ttf"),
    "road-rage": require("./assets/fonts/Road-Rage.otf"),
    "coffee-extra": require("./assets/fonts/Coffee-Extra.otf"),
  });

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  function gameOverHandler() {
    setGameOver(true);
  }

  let screen = <StartGameScreen onPickNumberProp={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumberProp={userNumber}
        onGameOverProp={gameOverHandler}
      />
    );
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={["cornsilk", "brown"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/bg3.png")}
        resizeMode="contain"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImageStyle}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.15,
  },
});
