import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DislplayLoading from '../../../Shared/DisplayLoading/DislplayLoading';
import AllSellersCart from './AllSellersCart';

const AllSellers = () => {
    
    
    const{data:sellers=[],refetch,isLoading}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            if(isLoading){
                return <DislplayLoading></DislplayLoading>
            }
            const allusers = await fetch('https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/sellers')
            const data= await allusers.json();
            return data
        }
    })
   
    const handleDeleteSeller= id=>{
        fetch(`https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/sellers/${id}`,{
            method:'DELETE',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('Seller deleted successfully')
            refetch()
        })
    }
   
    return (
        <div>
            
       <div className="overflow-x-auto">
        <h2 className='text-2xl text-center mt-6'>All Sellers</h2>
  <table className="table w-full mt-12">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete Saller</th>
      </tr>
    </thead>
    <tbody>
     
     {
        sellers.map((seller,i)=><AllSellersCart
        seller={seller}
        i={i}
        handleDeleteSeller={handleDeleteSeller}
        isLoading={isLoading}
        ></AllSellersCart>)
     }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;