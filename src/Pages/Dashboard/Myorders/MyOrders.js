import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import DisplayLoading from '../../../Shared/DisplayLoading/DislplayLoading'
const MyOrders = () => {
    const {user,loading}= useContext(AuthContext)
    
    const url= `https://phone-saler-klsc-r1shnmu5z-foysal5965s-projects.vercel.app/orders/?email=${user?.email}`
    const{data:orders=[]}=useQuery({
        queryKey:['orders', user?.email],
        queryFn:async()=>{
            const res= await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data= await res.json()
            return data
        }
    })
    if(loading){
        return <DisplayLoading></DisplayLoading>
    }
    
    return (
        <div>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 mt-6">
                <h2 className="text-xl font-semibold">My Orders</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {
                        orders?.map(order=> <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={order.img} alt="Polaroid camera" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1 items-center justify-center">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{order.mobileName}</h3>
                                        <div className="">
                                        <p className="text-lg font-semibold">original Price :{order.original_price}$</p>
                                        <p className="text-lg font-semibold">New Price :{order.resel_price}$</p>

                                    </div> 
                                    </div>
                                   
                                </div>

                            </div>
                            
                                <Link to={`/dashboard/payment/${order._id}`}>
                                 <button disabled={order.paid} className='btn  rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white '>Pay</button>
                                </Link>
                            
                        </div>
                        <p className='text-white'></p>
                    </li>)
                    }
                   


                </ul>


            </div>
        </div>
    );
};

export default MyOrders;