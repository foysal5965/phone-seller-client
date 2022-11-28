import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../../Shared/confirmationModal/ConfirmationModal';


import AdvertiseProductCard from './AdvertiseProductCard';

const AdvertisedProduct = () => {
    const [advertise,setAdvertise]= useState([])
    const{data:advertisedProducts=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const allusers = await fetch('https://phone-saler.vercel.app/advertisedproducts')
            const data= await allusers.json();
            return data
        }
    })
    return (
        <div className='mt-12'>
            <h2 className='text-2xl font-bold text-center'>All Advertised Products are here</h2>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-12'>
                {
                    advertisedProducts.map(product=><AdvertiseProductCard
                    key={product._id}
                    product={product}
                    setAdvertise={setAdvertise}
                    ></AdvertiseProductCard>)
                }
                
            </div>
           {
            advertise && <ConfirmationModal
            advertise={advertise}
            setAdvertise={setAdvertise}
            ></ConfirmationModal>
           }
        </div>
    );
};

export default AdvertisedProduct;