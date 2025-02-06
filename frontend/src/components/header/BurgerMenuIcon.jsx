import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Context from "../../context/service";

export default function BurgerMenuIcon() {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { updateLastPage } = context;
  const currentPage = useLocation();

  const handleMenuClick = () => {
    updateLastPage(currentPage.pathname)
    navigate("/menu");
  }

  return (
    <div className="menu-icon" onClick={handleMenuClick}>
      <div className="svg-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9rem"
          height="9rem"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="#a926f0"
            d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
          />
        </svg>
      </div>
    </div>
  );
}
