import StripeClient from "stripe-client";

export const stripe = new StripeClient(
    "pk_test_51P9cbB2KSPzI80Hq6Svegs307KgR56TlaOFE7rls0qBXChu1FzkPtAyWIlDe4tm000zlFwQv5ZZ4N7PjG8Yk7CQQ00ZDCnWqxQ",
);

export const cardTokenRequest = async (card) => {
    const response = await stripe.createToken({ card });
    return response.id;
};