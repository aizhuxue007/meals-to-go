import { View, Text, StyleSheet } from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: 'green',
  },
  text: {
    color: 'white'
  }
})

export default SearchBar