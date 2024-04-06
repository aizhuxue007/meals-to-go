import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params
    return (<RestaurantInfoCard restaurant={restaurant} />)
}

export default RestaurantDetailScreen