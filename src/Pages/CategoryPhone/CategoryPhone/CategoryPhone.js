import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderModal from '../../../Shared/orderModal/OrderModal';
import PhonesCard from '../PhonesCard/PhonesCard';

const CategoryPhone = () => {
    const phones= useLoaderData()
    const [phone, setPhone]=useState(null)
   
    return (
       <>
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 '>
            {
                phones.map(phone=><PhonesCard
                key={phone._id}
                phone={phone}
                setPhone={setPhone}
                ></PhonesCard>)
            }
            
        </div>
      {
        phone && 
        <OrderModal
        phone={phone}
        setPhone={setPhone}
        ></OrderModal>
      }
       </>
    );
};

export default CategoryPhone;