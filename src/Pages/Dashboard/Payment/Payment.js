import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51M6azOIQptdv0XRzYFPJ9Q7GlEMDoGukuWcgR3q52OdgfZvnYNNeWj6flZiVyxLiIQivSfpIgxGbRZ1cNueJqwdF00gTMgWiUF');
const Payment = () => {
    const order= useLoaderData()
    return (
        <div className='w-96 my-12'>
            <h2 className='text-xl'>Pay Your Price</h2>
                <div className='mt-6'>
                <Elements  stripe={stripePromise}>
                    <CheckoutForm order={order}/>
                </Elements>
                </div>
            </div>
    );
};

export default Payment;