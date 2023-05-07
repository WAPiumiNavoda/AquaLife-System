import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (!error) {
      console.log('Stripe  PaymentMethod', paymentMethod);
      // make API call to server with payment details for processing
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="card-element">Credit or debit card</label>
        <div id="card-element">
          <CardElement />
        </div>
      </div>
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Loading...' : 'Pay'}
      </button>
    </form>
  );
};

export default PaymentForm;
