import React from 'react';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const PhonesCard = ({phone,setPhone}) => {
    const {name,location,img,resel_price, original_price, seler_name, post_date,yearsOf_use}=phone;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <div className='ml-6'>
    <h2 className="card-title">{name}</h2>
    <p>Seller: {seler_name}</p>
    <p>Original Price: {original_price}$</p>
    <p>Resel Price: {resel_price}$</p>
    <p>Years of Use: {yearsOf_use}year</p>
    <p>Post date: {post_date}</p>
    <p>Location: {location}</p>
    </div>
    
    
    <div className="card-actions justify-center">
      <PrimaryButton
      classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 bg-gray-700 text-white text-gray-100 mt-6'>
       <label htmlFor="my-modal" className=' '
       onClick={()=>setPhone(phone)}
       >Buy Now</label>
      </PrimaryButton>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default PhonesCard;