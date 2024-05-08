import React, { useContext } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { OrderButton } from "../components/restaurant-info-card.styles";
import { CartContext } from "../../../services/cart/cart.context";

const RestaurantDetailScreen = ({ navigation, route }) => {
  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Turkey Sandwich" />
          <List.Item title="Mushroom Sprout Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon {...props} icon="silverware-fork-knife" />
          )}
        >
          <List.Item title="Beyond Burger Bonanza" />
          <List.Item title="Scallion Scallops Scallapizo" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="bottle-soda" />}
        >
          <List.Item title="Hot Dog Water" />
          <List.Item title="Pickle Soda" />
        </List.Accordion>
      </ScrollView>
      <OrderButton
        onPress={() => {
          addToCart({ item: "special", price: 1299 }, restaurant);
          navigation.navigate("Checkout");
        }}
      >
        Order Special Only $12.99
      </OrderButton>
    </>
  );
};

export default RestaurantDetailScreen;
