import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["cornsilk", "brown"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/bg3.png")}
        resizeMode="contain"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImageStyle}
      >
        <StartGameScreen />
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
