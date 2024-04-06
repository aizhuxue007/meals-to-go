import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params
    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
        </SafeArea>
    )
}

export default RestaurantDetailScreen