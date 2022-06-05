import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    padding: 8,
    margin: 8,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary800,
    textAlign: "center",
    borderWidth: 3,
    borderColor: Colors.primary800,
    borderRadius: 10,
  },
});
