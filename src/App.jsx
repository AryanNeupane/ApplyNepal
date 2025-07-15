import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AllJobs from './pages/AllJobs'
import JobDetails from './pages/JobDetails'
import About from './pages/About'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
const App = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-7xl max-auto px-4">

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/all-jobs' element={<AllJobs/>}/>
            <Route path='/job-details/:id' element={<JobDetails/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
    </div>
  )
}

export default App