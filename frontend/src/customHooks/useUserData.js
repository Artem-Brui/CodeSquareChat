import { useContext } from "react";
import Context from "../context/service";

export default function useUserData() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Context not found...");
  }

  const { userData, updateUserData, isTokenVerifed, updateTokenVerify } =
    context;

  const userDataContext = {
    userData,
    updateUserData,
    isTokenVerifed,
    updateTokenVerify
  };

  if (!context) {
    throw new Error("Context is not defined!!..");
  }

  return userDataContext;
}
