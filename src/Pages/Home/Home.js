import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertisedProduct from './AdvertisedProduct/AdvertisedProduct';
import Banner from './Banner';
import CategoryCard from './CategoryCard';

const Home = () => {
  const categories = useLoaderData()
  return (
    <div>

      <Banner></Banner>
      <h3 className='text-3xl font-bold text-center mt-12'>Welcome to the safest marketplace for newish tech</h3>
      <p className='text-center text-2xl'>Chose your phone and make your day</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 mx-auto'>
        {
          categories.map(category => <CategoryCard
            key={category.id}
            category={category}
          ></CategoryCard>)
        }

      </div>
      <AdvertisedProduct></AdvertisedProduct>
      <div className="hero min-h-screen mt-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg?size=338&ext=jpg&uid=R85874855&ga=GA1.2.1406009564.1667614079&semt=sph" className="w-1/2 rounded-lg shadow-2xl" />
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">Do you need some Awsome mobile phone!</h1>
            <p className="py-6">If you want to buy a good mobile phone then our website can be a good option for you.
              We have some mobiles like yours that can make your day easier and more beautiful</p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;