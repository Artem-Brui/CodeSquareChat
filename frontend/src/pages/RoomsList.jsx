import { Router, Route, Routes, Link } from "react-router-dom";

export default function RoomsList({ list }) {
  const getBorderColor = (id) => {
    if (id % 4 === 0) return "blue";
    if (id % 4 === 1) return "green";
    if (id % 4 === 2) return "yellow";
    if (id % 4 === 3) return "red";
  };

  return (
    <div className="rooms">
      {list.map((room) => {
        const { id, name, capacity } = room;
        const borderColor = getBorderColor(id);
        const roomClassName = `room room-${borderColor}`;

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
              <div className="room-capacity">{capacity}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
