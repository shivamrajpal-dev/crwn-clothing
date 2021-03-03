import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IQqSyHHW9BJb4iCeil6npW30drclMS8W6wU9PS1t8Z7bSkyKoeUic5aAFnwyCZX0RsN2MTzTyPGdLwrSOPD1SOz00RQkBNpEC";
  const onToken = (token) => {
    console.log(token);
    alert("payment Succesful");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel="pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
