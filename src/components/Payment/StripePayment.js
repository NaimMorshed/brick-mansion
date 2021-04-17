import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';
import SplitForm from './SplitForm';

const key = 'pk_test_51Ie1QlIjhmlFqDhptlxa1rwS0Ero5kijAWiIdbWyjZvf8HYmhJjepEGOmLGEAu82zeQoW3KIdLa6YMgBwrYNYA6S00ErHxoGaU'
const stripePromise = loadStripe(key);

const StripePayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SplitForm />
        </Elements>
    );
};

export default StripePayment;