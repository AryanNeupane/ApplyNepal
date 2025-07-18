import React from "react";
import { vacancies } from "../assets/assets"; // Assuming vacancies data is imported from assets

const PopularVacancies = () => {
  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-indigo-100 text-indigo-800",
    "bg-red-100 text-red-800",
    "bg-teal-100 text-teal-800",
  ];

  return (
    <div className="py-16 px-4 md:px-16 lg:px-24">
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800 mb-8">
        Most Popular Vacancies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {vacancies.map((item, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <div
              key={index}
              className={`p-6 rounded-lg shadow ${colorClass} hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className="text-l font-semibold">{item.title}</h3>
              <p className="text-sm">{item.count} open positions</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularVacancies;
