import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios, { Axios } from "axios";

const Payment = () => {
  const PUBLISHEDKEY =
    "pk_test_51OBcCkSAakgfJaHg0amF84Ys0OKmjlkelVJel84PyndEPlDqxxYSX4Vb1RSHq1JzRrukw8CPiCfZsRp1MimUUKDw00x4icEqEV";
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    console.log(stripeToken, "ontoken fn");

    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data, "frontend");
      } catch (error) {
        console.log(error);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StripeCheckout
        stripeKey={PUBLISHEDKEY}
        name="Prakash"
        description="your total  is $30"
        amount={3000}
        token={onToken}
      >
        <button style={{ padding: "10px", cursor: "pointer" }}> Payment</button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;

//  below 2 attributes are mendatory
//  token
//  stripeKey;
