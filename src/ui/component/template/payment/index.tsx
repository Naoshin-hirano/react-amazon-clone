import React from "react";
import { Header } from "ui/component/organism/common/header";
import { Payment } from "ui/component/organism/payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
    "pk_test_51GxK2EFjdfjgcidOJRFut1KmR2wihbdrukB6yshUqRlP1QtTna5ZRjYTGcgFgg1wwvVf5c4vNp3mw8FCRVq3dUnW0034b3GyjS"
);

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <Header />
            <Elements stripe={promise}>
                <Payment {...props} />
            </Elements>
        </div>
    );
};
