import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a new context that will hold app-wide data
export const AppContext = createContext();

// This component will wrap the app (or parts of it) to provide shared context
const AppContextProvider = ({ children }) => {
  // useNavigate allows components to navigate programmatically (e.g., navigate("/home"))
  const navigate = useNavigate();

  // Boolean state to track if the user has a "user" role
  const [user, setUser] = useState(false);

  // Boolean state to track if the user has an "employer" role
  const [employer, setEmployer] = useState(false);

  // Boolean state to track if the user has an "admin" role
  const [admin, setAdmin] = useState(false);

  // All values that we want to share through the context
  const value = {
    navigate,
    user,
    setUser,
    employer,
    setEmployer,
    admin,
    setAdmin,
  };

  // The context provider that wraps children and shares the value object
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Export the provider to use it in other parts of the app
export default AppContextProvider;
