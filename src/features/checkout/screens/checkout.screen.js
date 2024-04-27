import React, { useState } from "react";
import { Button } from "react-native";
import StripeClient from "stripe-client";
import { LiteCreditCardInput } from "react-native-credit-card-input";
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
    console.log(token);
}

const CheckoutScreen = ({ navigation }) => {
    const [formValid, setFormValid] = useState(false);
    onPayment();

    const _onChange = form => {
        console.log(form);
        if (form.valid) setFormValid(true)
    }

    return (
        <SafeArea>
            <LiteCreditCardInput onChange={_onChange} />
            {formValid && <Button
                onPress={() => null}
                title="Form Validated"
                color="#841584"
                accessibilityLabel="Testing complete credit card form"
            />}
        </SafeArea>
    );
};

export default CheckoutScreen;
