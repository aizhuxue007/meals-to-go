import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`

export default function App() {
  return (
    <SafeArea>
      <RestaurantScreen />
    </SafeArea>
  );
}

