import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import AllJobs from './pages/AllJobs';
import JobDetails from './pages/JobDetails';
import About from './pages/About';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const adminPath=useLocation().pathname.includes("admin")
  const employerPath=useLocation().pathname.includes("employer")
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {adminPath|| employerPath? null :<Navbar />}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-jobs' element={<AllJobs />} />
          <Route path='/job-details/:id' element={<JobDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
        {adminPath|| employerPath? null :<Footer />}

    </>
  );
};

export default App;
