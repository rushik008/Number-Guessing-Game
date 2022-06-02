import { View, Text, StyleSheet, Pressable } from "react-native";

function PressHandler() {
  console.log("Pressed !");
}
function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={PressHandler}
        android_ripple={{ color: "cornsilk" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 15,
    margin: 3,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "darkred",
  },

  buttonText: {
    color: "cornsilk",
    textAlign: "center",
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});
