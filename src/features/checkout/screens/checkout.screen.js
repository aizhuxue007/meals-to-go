import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import {
  cardTokenRequest,
  payRequest,
} from "../../../services/checkout/checkout.service";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  IndentedText,
  IndentedListItem,
  NameInput,
  PayButton,
  ClearButton,
} from "../checkout.styles";
import { CartContext } from "../../../services/cart/cart.context";
import {
  CartIconContainer,
  CartIcon,
  PaymentProcessing,
} from "../checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const CheckoutScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);

  async function onPayment() {
    if (!token) {
      navigation.navigate("CheckoutErrorScreen", {
        error: "need valid credit card!",
      });
      return;
    }
    setIsLoading(true);
    try {
      const resp = await payRequest(token, sum, name);
      setIsLoading(false);
      clearCart();
      navigation.navigate("CheckoutSuccessScreen");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      navigation.navigate("CheckoutErrorScreen", { error });
    }
  }

  const _onChange = async (form) => {
    if (form.valid) {
      const { name, expiry, cvc, number } = form.values;
      const [exp_month, exp_year] = expiry.split("/");
      const resp = await cardTokenRequest({
        name,
        exp_month,
        exp_year,
        cvc,
        number,
      });
      setToken(resp);
    }
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <IndentedText variant="body">Cart is empty.</IndentedText>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <IndentedText variant="bold">Your Order</IndentedText>
        <List.Section>
          {cart.map((product) => {
            const { item, price } = product;
            return <IndentedListItem title={`${item} - $${price / 100}`} />;
          })}
        </List.Section>
        {isLoading && <PaymentProcessing />}
        <IndentedText variant="bold">Total</IndentedText>
        <IndentedText variant="body">{`$${sum / 100}`}</IndentedText>
        <IndentedText variant="bold">Payment</IndentedText>
        <NameInput label="name" value={name} onChangeText={(t) => setName(t)} />
        {name.length > 0 && (
          <LiteCreditCardInput onChange={_onChange} name={name} />
        )}
        <PayButton onPress={() => onPayment()} disabled={isLoading}>
          Pay
        </PayButton>
        <ClearButton onPress={() => clearCart()} disabled={isLoading}>
          Clear Cart
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};

export default CheckoutScreen;
