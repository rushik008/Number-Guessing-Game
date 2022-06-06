import { Text, View, SafeAreaView, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.gameOverTextStyle}>Game Over</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  gameOverTextStyle: {
    color: Colors.primary800,
    fontSize: 36,
    fontFamily: "road-rage",
  },

  // textStyle: {
  //   color: Colors.primary800,
  //   fontSize: 28,
  //   fontFamily: "open-sans-regular",
  // },

  // textHighlight: {
  //   fontFamily: "open-sans-bold",
  // },
});

export default GameOverScreen;
