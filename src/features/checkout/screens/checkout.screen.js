import React, { useState, useContext } from "react";
import { Button } from "react-native";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { CartContext } from "../../../services/cart/cart.context";
import { CartIconContainer, CartIcon } from "../checkout.styles";

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
                    <Text variant="error">Cart is empty.</Text>
                </CartIconContainer>
            </SafeArea>
        )
    }

    return (
        <SafeArea>
            <LiteCreditCardInput onChange={_onChange} />
            {formValid && <Button
                onPress={onPayment}
                title="Form Validated"
                color="#841584"
                accessibilityLabel="Testing complete credit card form"
            />}
            <Text>{JSON.stringify(cart)}</Text>
        </SafeArea>
    );
};

export default CheckoutScreen;
