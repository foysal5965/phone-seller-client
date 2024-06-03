import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const CategoryCard = ({category}) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 " >
  <figure><img className='rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-100 ease-in duration-300 mx-6 my-2' src={category.image} alt="Shoes" /></figure>
  <div className="card-body">
    
 
    <div className="card-actions justify-center">
     <PrimaryButton    
     classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100' >

     <Link to={`/category/${category.id}`}>
     <button className="">See all Producs</button></Link>
     </PrimaryButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;