import { useNavigate } from "react-router-dom";
import useUserData from "../../../customHooks/useUserData";
import { SERVER_HOST } from "../../../services/Hosts";

export default function DeleteAccount({ callBack }) {
  const {userData, updateTokenVerify } = useUserData()

  const navigate = useNavigate();

  const handleNoClick = () => callBack(false)
  const handleYesClick = async() => {

    try {
      const response = await fetch(`${SERVER_HOST}/users/${userData._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (response.status) {
        setTimeout(() => {
          updateTokenVerify(false)
          navigate('/');
          localStorage.setItem('userId', '');
        }, 0);
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          'Deleting failed! Please try again.'
      );
    }
  }
  
  return (
    <div className="user-settings-delete-container">
      <h3 className="delete-question">Are you sure that you want to delete your account?</h3>
      <div className="delete-answer-container">
        <button className="delete-answer-button" onClick={handleYesClick}>Yes</button>
        <button className="delete-answer-button" onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
}
