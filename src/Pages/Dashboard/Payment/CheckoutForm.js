import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
const CheckoutForm = ({order}) => {
    const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { CustomerName, resel_price,email ,_id} = order;
  
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create/payment/intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `beare ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify( {resel_price} ),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resel_price]);
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      setCardError(error.message)
    }
    else {
      setCardError('')
    }
    setSuccess('')
    const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: CustomerName,
            email: email
          },
        },
      },
    );
    console.log(paymentIntent)
    if (confirmationError) {
      setCardError(confirmationError.message)
    }
    if (paymentIntent.status === "succeeded") {
     
      const payment={
        resel_price,
        transactionId:paymentIntent.id,
        orderId:_id
      }
      fetch('http://localhost:5000/payments',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(payment)

      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
            setSuccess('Congratulation! your payment done');
            setTransactionId(paymentIntent.id)
        }
      })
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-primary mt-6' disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p>{cardError}</p>
     {
      success && <div>
        <p>{success}</p>
        <p>Your transactionid: {transactionId}</p>
      </div>
     }
    </form>
  );
};

export default CheckoutForm;