import React, { useState } from 'react';
import toast from 'react-hot-toast';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const MyProductsCard = ({ product, refetch }) => {
    const [disabled, setDisabled] = useState('')
    const { _id } = product
    const advertiseProduct = {
        product,
        advertiseId: product._id
    }
    const handleAdvertise = () => {
        fetch(`https://phone-saler.vercel.app/advertisedproducts`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {

                toast.success('Your Advertise Done. Please Check The Home Page')
                setDisabled(data.acknowledged)

            })
    }

    return (
        <div>
            <li className="flex flex-col py-6 sm:flex-row-reverse sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    
                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={product.img} alt="Polaroid camera" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1 items-center justify-center">
                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.name}</h3>
                                    <div className="">
                                        <p className="text-lg font-semibold">original Price: {product.original_price}$</p>
                                        <p className="text-lg font-semibold">New Price: {product.resel_price}$</p>
                                        <p className="text-lg font-semibold">Location: {product.location}</p>

                                    </div>

                                </div>

                            </div>

                        </div>
                    
                    
                        {
                            !disabled ? <div className='justify-end items-center mt-6'>
                                <PrimaryButton><button onClick={handleAdvertise} className='btn  rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white '>Advertise Product</button></PrimaryButton>
                            </div> :
                                <div className='justify-end items-center mt-6'>
                                    <PrimaryButton><button disabled className='btn  rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white '>Advertise Product</button></PrimaryButton>
                                </div>
                        }
                    

                </div>
                <p className='text-white'></p>
            </li>
        </div>
    );
};

export default MyProductsCard;