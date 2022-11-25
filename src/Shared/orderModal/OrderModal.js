import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { AuthContext } from '../../Context/AuthProvider';

const OrderModal = ({ phone ,setPhone}) => {
    const { name, location, resel_price, original_price, yearsOf_use,img } = phone
    const { user } = useContext(AuthContext)
    const handleSubmit=event=>{
        event.preventDefault()
        const form= event.target;
        const CustomerName= form.name.value;
        const email= form.email.value
        const location= form.location.value
        const original_price= form.originalPrice.value;
        const resel_price= form.reselPrice.value;
        const phone= form.phone.value;
        console.log(name,email,location,original_price,resel_price,phone)
        const booking={
            mobileName:name,
            CustomerName,
            email,
            phone,
            original_price,
            resel_price,
            location,img
        }
        fetch('http://localhost:5000/orders',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(booking)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Your Booking is placed')
                setPhone(null)
            }
           
            
        })
     
       
    }
    return (
        <>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' disabled Value={user.displayName} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' disabled Value={user.email} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="text" name='phone'  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type="text" name='originalPrice' disabled Value={original_price} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Resel Price</span>
                            </label>
                            <input type="text" name='reselPrice' disabled Value={resel_price} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name='location' disabled Value={location} className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900" />
                        </div>

                        <PrimaryButton
                            classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100 mt-6'
                        >
                            <input type="submit" value="Book Now" />
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderModal;