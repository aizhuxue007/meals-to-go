import React, { useState, useContext } from "react";
import { Button } from "react-native";
import { List } from "react-native-paper";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { IndentedText } from "../checkout.styles";
import { CartContext } from "../../../services/cart/cart.context";
import { CartIconContainer, CartIcon } from "../checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const testCardInfo = {
    card: {
        number: "4242424242424242",
        exp_month: "02",
        exp_year: "26",
        cvc: "999",
        name: "Billy Joe",
    },
};

async function onPayment() {
    try {
        const token = await cardTokenRequest(testCardInfo.card);
        console.log(token);
    } catch (error) {
        console.log(error)
    }
}

const CheckoutScreen = ({ navigation }) => {
    const [formValid, setFormValid] = useState(false);
    const { cart, restaurant } = useContext(CartContext)

    const _onChange = form => {
        if (form.valid) setFormValid(true)
    }

    if (!cart.length || !restaurant) {
        return (
            <SafeArea>
                <CartIconContainer>
                    <CartIcon icon="cart-off" />
                    <IndentedText variant="body">Cart is empty.</IndentedText>
                </CartIconContainer>
            </SafeArea>
        )
    }

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
            {formValid && <Button
                onPress={onPayment}
                title="Form Validated"
                color="#841584"
                accessibilityLabel="Testing complete credit card form"
            />}
            <IndentedText variant="body">Your Order</IndentedText>
            <List.Section>
                {cart.map(product => {
                    const { item, price } = product;
                    return (
                        <List.Item title={`${item} - $${price / 100}`} />
                    )
                })}
            </List.Section>
            <IndentedText variant="body">Total: $12.99</IndentedText>

            <LiteCreditCardInput onChange={_onChange} />
        </SafeArea>
    );
};

export default CheckoutScreen;
