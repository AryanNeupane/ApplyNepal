import React from 'react'; 
import { assets } from "../assets/assets";
import { heroData } from "../assets/assets";

const Hero = () => {
  return (
    <div className="py-16 bg-[#F1F2F4]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Left section */}
        <div className="max-w-[450px] w-full flex flex-col gap-5">
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

      {/* Hero feature section */}
      {/* Hero Data Section */}
<div className="flex flex-wrap items-center justify-center gap-4 mt-10">
  {heroData.map((item) => (
    <div
      key={item._id}
      className="bg-white w-[270px] h-[112px] flex items-center justify-center gap-4 px-4 shadow rounded-md"
    >
      <img src={item.icon} alt={item.title} className="w-10 h-10" />
      <div className="flex flex-col gap-1">
        <p className="text-xl font-semibold text-gray-800">{item.count}</p>
        <p className="text-sm text-gray-600">{item.title}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Hero;
