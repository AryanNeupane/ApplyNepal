
import React from 'react'; 
import { assets } from "../assets/assets";
import {heroData} from "../assets/assets";

const Hero=() => {
  return (
    <div className="py-16 bg-[#F1F2F4]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left section */}
        <div className="max-w-[450px] w-full flex flex-col px-4 gap-5">
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">
            Find a job that suits your interest & skills.
          </h1>
          <p className="text-sm text-gray-700">
            Find your dream job or hire top talent effortlessly with our modern job portal platform.
          </p>
        </div>

        {/* Right section */}
        <div>
          <img src={assets.hero_img} alt="Hero" />
        </div>
      </div>

      {/* herosection */}


    </div>
  );
};

export default Hero;
