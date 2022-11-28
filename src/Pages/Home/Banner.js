import React from 'react';
import './banner.css'
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full mt-16">
        <div id="slide1" className="carousel-item img relative w-full">
          <img src="https://img.freepik.com/free-photo/handsome-barista-black-apron-pointing-finger-mobile-screen-showing-app-smiling-standing-yellow-background_1258-73691.jpg?size=626&ext=jpg&uid=R85874855&ga=GA1.2.1406009564.1667614079&semt=sph" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;