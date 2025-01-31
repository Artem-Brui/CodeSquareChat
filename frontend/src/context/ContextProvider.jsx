import { useState } from "react";
import Context from "./service";


const ContextProvider = ({ children }) => {

  const [userData, setUserData] = useState({});
  const [isTokenVerifed, setIsTokenVerifed] = useState(false);

  const updateUserData = (data) => setUserData(data);
  const updateTokenVerify = (data) => setIsTokenVerifed(data);
  
  return (
    <Context.Provider
      value={{
        userData,
        updateUserData,
        isTokenVerifed,
        updateTokenVerify
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;