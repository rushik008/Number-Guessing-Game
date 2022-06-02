import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGamescreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Canfirm</PrimaryButton>
    </View>
  );
}

export default StartGamescreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 200,
    padding: 8,
    marginHorizontal: 8,
    backgroundColor: "cornsilk",
    borderRadius: 8,
    elevation: 8,
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
    borderBottomColor: "darkred",
    borderBottomWidth: 2,
    // text color
    color: "darkred",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
