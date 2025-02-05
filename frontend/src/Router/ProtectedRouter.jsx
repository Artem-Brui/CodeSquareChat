import { Navigate, Outlet } from "react-router-dom";
import useUserData from "../customHooks/useUserData";

const ProtectedRoute = () => {
  const { isTokenVerifed } = useUserData();

  return isTokenVerifed ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
