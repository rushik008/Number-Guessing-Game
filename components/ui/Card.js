import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors.js";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 8,
    marginHorizontal: 15,
    backgroundColor: Colors.accent500,
    borderRadius: 10,
    elevation: 10,
    // for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});

export default Card;
