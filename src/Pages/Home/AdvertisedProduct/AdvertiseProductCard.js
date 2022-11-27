import React from 'react';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const AdvertiseProductCard = ({product,setAdvertise}) => {
    const{img, name,original_price, resel_price,location ,yearsOf_use}= product
    console.log(product)
    return (
        <div>
            {/* <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src= alt="Movie" className='shadow shadow-lg'/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    
    
  </div>
</div> */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
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