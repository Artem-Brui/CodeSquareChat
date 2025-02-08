import { useLocation } from "react-router-dom";
import { capitaliser } from "../../services/service";


export default function Heading({ room }) {
  
  const currentLocation = useLocation().pathname.slice(1);
  const headerText = room ? `Room:  ${capitaliser(room.name)}` : capitaliser(currentLocation);

    return (
      <div className="heading">
        <h1>{headerText}</h1>
      </div>
    );

}
