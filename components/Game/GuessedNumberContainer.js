import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function GuessedNumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default GuessedNumberContainer;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    borderWidth: 3,
    borderColor: Colors.primary800,
    borderRadius: 25,
    // justifyContent: "center",
    // alignItems: "center",
  },

  numberText: {
    color: Colors.primary800,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});
