import { View, TextInput, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonStyle}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonStyle}>
          <PrimaryButton>Canfirm</PrimaryButton>
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
