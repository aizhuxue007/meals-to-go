import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CartIconContainer, CartIcon, IndentedText } from "../checkout.styles";

const CheckoutSuccessScreen = ({ navigation }) => {
  setTimeout(() => navigation.goBack(), 3000);

  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="cart-bold" />
        <IndentedText variant="label">Success!</IndentedText>
      </CartIconContainer>
    </SafeArea>
  );
};

export default CheckoutSuccessScreen;
