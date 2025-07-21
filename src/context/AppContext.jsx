import React, { createContext, useState, useEffect } from "react";  
import { useNavigate } from "react-router-dom";
import { categories, jobs } from "../assets/assets"; // Also make sure you import `jobs`

// Create a new context
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [admin, setAdmin] = useState(false);

  const [categoriesData, setCategoriesData] = useState([]);
  const [jobData, setJobData] = useState([]);

  const fetchCategories = () => {
    setCategoriesData(categories);
  };

  const fetchJobs = () => {
    setJobData(jobs);
  };

  useEffect(() => {
    fetchCategories();
    fetchJobs();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    employer,
    setEmployer,
    admin,
    setAdmin,
    categoriesData,
    jobData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
