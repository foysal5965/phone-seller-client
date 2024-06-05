import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
    const{user}= useContext(AuthContext)
    const{data:products, isLoading,refetch}=useQuery({
        queryKey:['specialty'],
        queryFn:async()=>{
            const res= await fetch(`https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/products?email=${user?.email}`)
            const data= await res.json()
            return data
        }
        
    })
 
    return (
        <div>
             <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 mt-6">
                <h2 className="text-xl font-semibold">My Products</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {
                        products?.map(product=><MyProductsCard
                        key={product._id}
                        product={product}
                        refetch={refetch}
                        ></MyProductsCard> )
                    }
                   


                </ul>


            </div>
        </div>
    );
};

export default MyProducts;