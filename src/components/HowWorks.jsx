import React from "react";
import { howWorks } from "../assets/assets"; // Assuming you have data for each step

const HowWorks = () => {
  return (
    <div className="py-16 px-4 md:px-16 lg:px-24 bg-[#F1F2F4]">
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800 text-center mb-12">
        How ApplyNepal Works
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 items-center justify-center">
        {howWorks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 text-center px-4"
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
