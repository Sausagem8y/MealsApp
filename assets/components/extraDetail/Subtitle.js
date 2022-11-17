import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>;
}

// this should be used in place of the hard code in the details screen, but for some reason,
// the app refuses to display anything on this page.

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#ddd",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
