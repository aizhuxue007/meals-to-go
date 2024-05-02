import React, { useState, useContext } from "react";
import { Button, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest, payRequest } from "../../../services/checkout/checkout.service";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { IndentedText, IndentedListItem, NameInput, PayButton, ClearButton } from "../checkout.styles";
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
        const response = await payRequest('abc123', 1299, 'Aizhu')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

const CheckoutScreen = ({ navigation }) => {
    const [formValid, setFormValid] = useState(false);
    const [name, setName] = useState("");
    const { cart, restaurant, sum, clearCart } = useContext(CartContext)

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
            <ScrollView>
                <IndentedText variant="bold">Your Order</IndentedText>
                <List.Section>
                    {cart.map(product => {
                        const { item, price } = product;
                        return (
                            <IndentedListItem title={`${item} - $${price / 100}`} />
                        )
                    })}
                </List.Section>
                <IndentedText variant="bold">Total</IndentedText>
                <IndentedText variant="body">{`$${sum / 100}`}</IndentedText>
                <IndentedText variant="bold">Payment</IndentedText>
                <NameInput label="name" value={name} onChangeText={t => setName(t)} />
                {name.length > 0 && <LiteCreditCardInput onChange={_onChange} name={name} />}
                <PayButton onPress={() => onPayment()}>Pay</PayButton>
                <ClearButton onPress={() => clearCart()}>Clear Cart</ClearButton>
            </ScrollView>
        </SafeArea>
    );
};

export default CheckoutScreen;
