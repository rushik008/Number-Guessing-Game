import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

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
        <SafeAreaView style={styles.rootScreen}>
          {screen}
          {/* <GameScreen /> */}
        </SafeAreaView>
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
