import { View, Text, StyleSheet } from "react-native";

const RestaurantList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Restaurant List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "blue",
  },
  text: {
    color: "white",
  },
});

export default RestaurantList;
