import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios, { Axios } from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = ({ total }) => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const onToken = (token) => {
    setStripeToken(token);
    console.log("stripe token", token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cart.total,
          }
        );
        navigate("/success", { state: cart });
        console.log(res.data, "frontend");
      } catch (error) {
        navigate("/success", { state: cart });
        console.log(error);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <StripeCheckout
      stripeKey={
        "pk_test_51OBcCkSAakgfJaHg0amF84Ys0OKmjlkelVJel84PyndEPlDqxxYSX4Vb1RSHq1JzRrukw8CPiCfZsRp1MimUUKDw00x4icEqEV"
      }
      name="Prakash"
      description={`your total  is $ ${total}`}
      amount={total * 100}
      token={onToken}
    >
      <button
        style={{
          cursor: "pointer",
          width: "100%",
          background: "transparent",
          border: "none",
          fontWeight: 400,
          fontSize: "20px",
        }}
      >
        Payment
      </button>
    </StripeCheckout>
  );
};

export default Payment;

//  below 2 attributes are mendatory
//  token
//  stripeKey;
