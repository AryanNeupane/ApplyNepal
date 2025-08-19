import React, { createContext, useState, useEffect } from "react";  
import { useNavigate } from "react-router-dom";
import { categories, jobs } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [admin, setAdmin] = useState(false);

  const [categoriesData, setCategoriesData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [query, setQuery] = useState("");   // ✅ moved inside

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
    query,
    setQuery,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
