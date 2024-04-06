import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";

const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params
    return (
        <>
            <RestaurantInfoCard restaurant={restaurant} />

            <List.Accordion
                title="Breakfast"
                left={props => <List.Icon {...props} icon="bread-slice"
                />}>
                <List.Item title="Eggs Benedict" />
                <List.Item title="Classic Breakfast" />
            </List.Accordion>
            <List.Accordion
                title="Lunch"
                left={props => <List.Icon {...props} icon="hamburger" />}>
                <List.Item title="Eggs Benedict" />
                <List.Item title="Classic Breakfast" />
            </List.Accordion>
            <List.Accordion
                title="Dinner"
                left={props => <List.Icon {...props} icon="silverware-fork-knife" />}>
                <List.Item title="Eggs Benedict" />
                <List.Item title="Classic Breakfast" />
            </List.Accordion>
            <List.Accordion
                title="Drinks"
                left={props => <List.Icon {...props} icon="bottle-soda" />}>
                <List.Item title="Eggs Benedict" />
                <List.Item title="Classic Breakfast" />
            </List.Accordion>



        </>
    )
}

export default RestaurantDetailScreen