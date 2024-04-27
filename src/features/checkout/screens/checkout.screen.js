import React from "react";
import StripeClient from "stripe-client";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const stripe = new StripeClient(
  "pk_test_51P9cbB2KSPzI80Hq6Svegs307KgR56TlaOFE7rls0qBXChu1FzkPtAyWIlDe4tm000zlFwQv5ZZ4N7PjG8Yk7CQQ00ZDCnWqxQ",
);

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
  const card = await stripe.createToken(testCardInfo);
  const token = card.id;
  console.log(card, token);
}

const CheckoutScreen = ({ navigation }) => {
  onPayment();

  return (
    <SafeArea>
      <Text variant="body">Hello Checkout</Text>
    </SafeArea>
  );
};

export default CheckoutScreen;
