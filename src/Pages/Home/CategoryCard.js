import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={category.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{category.name}</h2>
 
    <div className="card-actions justify-end">
     <Link to={`/category/${category.id}`}>
     <button className="btn btn-primary">See all Producs</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;