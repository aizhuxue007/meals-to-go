import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CartIconContainer, CartIcon, IndentedText } from "../checkout.styles";

const CheckoutErrorScreen = ({ route, navigation }) => {
    const { error } = route.params;
    setTimeout(() => navigation.goBack(), 3000)
    return (
        <SafeArea>
            <CartIconContainer>
                <CartIcon icon="cart" />
                <IndentedText variant="label">{error}</IndentedText>
            </CartIconContainer>
        </SafeArea>
    )
}

export default CheckoutErrorScreen;