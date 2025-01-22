import { useState } from "react";
import { ChildrenType } from "./types";
import { Context } from "./service";


const ContextProvider: React.FC<ChildrenType> = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedInStatus = (newStatus: boolean): void => setIsLoggedIn(newStatus);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        handleLoggedInStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;