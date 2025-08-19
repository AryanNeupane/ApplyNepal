import React, { useEffect, useContext } from "react";   // <-- import useContext
import Hero from "../components/Hero";
import PopularVacancies from "../components/PopularVacancies";
import HowWorks from "../components/HowWorks";
import Categories from "../components/Categories";
import Jobs from "../components/Jobs";
import Testimonials from "../components/Testimonials";
import { AppContext } from "../context/AppContext";     // <-- import AppContext

const Home = () => {
  const { setQuery } = useContext(AppContext); // ✅ move outside useEffect

  useEffect(() => {
    setQuery(""); // Reset query when Home component mounts
  }, [setQuery]); // ✅ add dependency

  return (
    <div>
      <Hero />
      <PopularVacancies />
      <HowWorks />
      <Categories />
      <Jobs />
      <Testimonials />
    </div>
  );
};

export default Home;
