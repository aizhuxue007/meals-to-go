import React, { useState } from "react";
import { Button } from "react-native";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { checkoutRequest } from "../../../services/checkout/checkout.service";
import { SafeArea } from "../../../components/utility/safe-area.component";

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
    const token = await checkoutRequest()
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
