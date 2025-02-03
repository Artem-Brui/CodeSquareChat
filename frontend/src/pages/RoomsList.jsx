import { Link } from "react-router-dom";
import useRoomsList from "../customHooks/useRoomsList";

export default function RoomsList() {
  const { roomsList } = useRoomsList();

  const getBorderColor = (id) => {
    if (id % 4 === 0) return "blue";
    if (id % 4 === 1) return "green";
    if (id % 4 === 2) return "yellow";
    if (id % 4 === 3) return "red";
  };

  return (
    <div className="rooms">
      {roomsList.map((room) => {
        const { id, name, capacity } = room;
        const borderColor = getBorderColor(id);
        const roomClassName = `room room-${borderColor}`;
        const messageName = capacity === '1' ? 'message' : 'messages'

        return (
          <div key={id} className={roomClassName}>
            <Link to={`/rooms/${id}`} className="room-link">
              <div className="room-image">
                <div className="room-placeholder">
                  <img
                    src="../src/assets/images/placeholder-rooms.png"
                    alt="Room Image"
                  />
                </div>
              </div>
              <div className="room-name">{name}</div>
              <div className="room-capacity">{capacity} {messageName}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
