import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import CategoryCard from './CategoryCard';

const Home = () => {
    const categories= useLoaderData()
    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
            <h3 className='text-3xl text-center'>What do you want to buy</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 mx-auto'>
                {
                    categories.map(category=><CategoryCard
                    key={category.id}
                    category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Home;