import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext";
import JobCart from '../components/JobCart';


const AllJobs = () => {
  const {jobData}= useContext(AppContext )

  return (
    <div>
      <h1 className='text-2xl md:text-5xl font-semibold text-gray-800 '>Available Jobs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {jobData.map((job, index) => (
          <JobCart key={job._id || index} job={job} />
        ))}
      </div>

    </div>
  )
}

export default AllJobs