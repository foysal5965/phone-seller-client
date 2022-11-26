import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import CategoryCard from './CategoryCard';

const Home = () => {
    const categories= useLoaderData()
    return (
        <div>
            
            <Banner></Banner>
            <h3 className='text-3xl font-bold text-center mt-12'>Welcome to the safest marketplace for newish tech</h3>
            <p className='text-center text-2xl'>Chose your phone and make your day</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 mx-auto'>
                {
                    categories.map(category=><CategoryCard
                    key={category.id}
                    category={category}
                    ></CategoryCard>)
                }
                 <div className="hero mt-16 flex justify-between">
          <div className="hero-content flex-col lg:flex-row-reverse">
            
            <div>
              <h1 className="text-5xl font-bold">Your smile starts <br /> here</h1>
              <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
              <button className="btn btn-primary text-white">Get Started</button>
            </div>
            <img src='' className="rounded-lg shadow-2xl lg:w-1/2 mr-12" alt='' />
          </div>
        </div>
            </div>
        </div>
    );
};

export default Home;