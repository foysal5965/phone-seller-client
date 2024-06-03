import React from 'react';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const AdvertiseProductCard = ({product,setAdvertise}) => {
    const{img, name,original_price, resel_price,location ,yearsOf_use}= product
    // console.log(product)
    return (
        <div>
            {/* <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src= alt="Movie" className='shadow shadow-lg'/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    
    
  </div>
</div> */}
<div className="card card-compact w-96 bg-base-100 shadow-xl text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
  <figure><img className='rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2'src={img} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='text-center'>
   <h2 className="text-xl font-semibold">{name}</h2>
    
    <p>Original Price: {original_price}$</p>
    <p>New Price: {resel_price}$</p>
    <p>Location: {location}</p>
    
    <p>Year of Purchase: {yearsOf_use}</p>
   </div>
   
    <div className="card-actions flex items-center justify-center">
      <PrimaryButton
      classes=""
      
      >
         <label htmlFor="confirmation-modal" onClick={()=>setAdvertise(product)} className=" btn rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white">Book Now</label>
      </PrimaryButton>
      
    </div>
    
    
  </div>
</div>
        </div>
    );
};

export default AdvertiseProductCard;