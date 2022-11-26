import React from 'react';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const AdvertiseProductCard = ({product,setAdvertise}) => {
    const{img, name,original_price, resel_price,location ,yearsOf_use}= product
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
    <h2 className="card-title">{name}</h2>
    
    <p>Original Price: {original_price}</p>
    <p>New Price: {resel_price}</p>
    <p>Location: {location}</p>
    <p>Location: {location}</p>
    <p>Year of Purchase: {yearsOf_use}</p>
   
    <div className="card-actions flex items-center justify-start">
      <PrimaryButton
      classes=" btn rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white"
      
      >
        <label onClick={()=>setAdvertise(product)} htmlFor="my-modal-2">Book Now</label>
      </PrimaryButton>
      
    </div>
    
    
  </div>
</div>
        </div>
    );
};

export default AdvertiseProductCard;