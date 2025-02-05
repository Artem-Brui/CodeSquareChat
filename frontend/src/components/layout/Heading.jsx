import { useLocation } from "react-router-dom";
import useUserData from "../../customHooks/useUserData";


export default function Heading({ room }) {
  const capitalizer = (string) => {
    return string.split('')[0].toUpperCase() + string.split('').slice(1).join('');
  }

  const currentLocation = useLocation().pathname.slice(1);
  const headerText = room ? `Room:  ${room.name}` : capitalizer(currentLocation);

    return (
      <div className="heading">
        <h1>{headerText}</h1>
      </div>
    );

}
