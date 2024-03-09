import { View } from 'react-native'
import SearchBar from '../components/SearchBar'
import RestaurantList from '../components/RestaurantList'

const Search = () => {
    return (
        <View>
            <SearchBar />
            <RestaurantList />
        </View>
    )
}

export default Search