import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
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
    fetch("https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/create/payment/intent", {
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
      fetch('https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/payments',{
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
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement className='border w-full'
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
      <PrimaryButton
      classes='hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white w-full'
      ><button type="submit"  disabled={!stripe || !clientSecret}>
        Pay
      </button></PrimaryButton>
      <p>{cardError}</p>
    
    </form>
    {
      success && <div>
        <p>{success}</p>
        <p>Your transactionid: {transactionId}</p>
      </div>
     }
    </div>
  );
};

export default CheckoutForm;