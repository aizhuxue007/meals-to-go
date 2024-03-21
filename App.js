import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
