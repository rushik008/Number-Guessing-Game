import { StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumberProp={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["cornsilk", "brown"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/bg3.png")}
        resizeMode="contain"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImageStyle}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: "navajowhite",
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.15,
  },
});
