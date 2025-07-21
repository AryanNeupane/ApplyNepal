import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const JobCart = ({ job }) => {
  const { navigate } = useContext(AppContext);

  return (
    <div
      onClick={() => navigate(`/job-details/${job._id}`)}
      className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-base font-semibold text-gray-800">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.type}</p>
        </div>
        <img
          src={job.image}
          alt={job.title}
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>

      <div className="mt-3 text-sm text-gray-700">
        <p className="font-medium">{job.salary}</p>
        <p>{job.company}</p>
        <p className="text-xs text-gray-500">{job.location}</p>
      </div>
    </div>
  );
};

export default JobCart;
