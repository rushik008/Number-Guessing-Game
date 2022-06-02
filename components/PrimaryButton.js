import { View, Text, StyleSheet, Pressable } from "react-native";

function PressHandler() {
  console.log("Pressed !");
}
function PrimaryButton({ children }) {
  return (
    <Pressable onPress={PressHandler} android_ripple={{ color: "white" }}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    backgroundColor: "darkred",
    borderRadius: 8,
  },
  buttonText: {
    color: "cornsilk",
    textAlign: "center",
    fontWeight: "bold",
  },
});
