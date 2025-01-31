import { useState } from "react";
import Context from "./service";


const ContextProvider = ({ children }) => {

  const [userData, setUserData] = useState({});

  const updateUserData = (data) => setUserData(data);

  return (
    <Context.Provider
      value={{
        userData,
        updateUserData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;