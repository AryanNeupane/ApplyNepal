import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import JobCart from './JobCart';

const Jobs = () => {
  const { jobData } = useContext(AppContext);

  return (
    <div className=" py-6 px-4 rounded-xl">
      <h1 className='text-2xl font-bold text-gray-800 mb-4'>
        Featured Jobs
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {jobData.map((job, index) => (
          <JobCart key={job._id || index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
