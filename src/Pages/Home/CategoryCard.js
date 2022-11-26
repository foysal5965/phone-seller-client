import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const CategoryCard = ({category}) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={category.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center">{category.name}</h2>
 
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