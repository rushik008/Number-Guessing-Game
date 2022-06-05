import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    marginBottom: 8,
    color: Colors.primary800,
    fontWeight: "bold",
    fontSize: 18,
    borderBottomColor: Colors.primary800,
    borderBottomWidth: 1,
  },
});

export default InstructionText;
