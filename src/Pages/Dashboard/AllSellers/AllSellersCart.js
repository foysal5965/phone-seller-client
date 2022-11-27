import React from 'react';
import DislplayLoading from '../../../Shared/DisplayLoading/DislplayLoading';

const AllSellersCart = ({seller,i,handleDeleteSeller,isLoading}) => {
    console.log(seller)
    const{name,email,_id}=seller
    
    return (
     
        <>
          <tr>
        <th>{i+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        
        <td><button onClick={()=>handleDeleteSeller(_id)} className='btn btn-sm rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'>Delete</button></td>
        
      </tr>
       
        
      
        </>
    );
};

export default AllSellersCart;