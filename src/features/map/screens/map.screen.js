import MapView from 'react-native-maps'
import { SafeArea } from '../../../components/utility/safe-area.component'
import Search from '../components/search.component'

export const MapScreen = () => {
    return (
        <SafeArea style={{ position: 'relative' }}>
            <Search />
            <MapView style={{ height: '100%' }} />
        </SafeArea>
    )
}