import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import SearchBar from './src/components/SearchBar';
import RestaurantList from './src/components/RestaurantList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <RestaurantList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
