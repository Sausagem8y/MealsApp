import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddinghorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginhorizontal: 12,
    backgroundColor: "#ddd",
  },
  itemText: {
    color: "#222",
    textAlign: "center",
  },
});
