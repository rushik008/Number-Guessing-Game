import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPressProp }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        // This is important to understand -> module 4 video 13
        onPress={onPressProp}
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
    backgroundColor: Colors.primary800,
  },

  buttonText: {
    color: Colors.accent500,
    textAlign: "center",
    // fontWeight: "bold",
    fontFamily: "coffee-extra",
  },

  pressed: {
    opacity: 0.75,
  },
});
