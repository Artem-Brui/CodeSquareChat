import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const [isTokenVerifed, setIsTokenVerifed] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      const checkAuth = async () => {
        const checkToken = async () => {
          try {
            const tokenBDResponse = await fetch(
              `http://localhost:5007/users/${userId}/token`
            );
            const responseData = await tokenBDResponse.json();

            setIsTokenVerifed(responseData);
          } catch (error) {
            console.error(error);
          }
        };
        checkToken();
      };

      checkAuth();
    } else {
      setIsTokenVerifed(false);
    }
  }, []);
  
  if (isTokenVerifed === null) {
    return;
  }

  return isTokenVerifed ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
