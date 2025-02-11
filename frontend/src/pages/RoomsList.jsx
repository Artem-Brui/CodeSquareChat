import { Link } from 'react-router-dom';
import useRoomsList from '../customHooks/useRoomsList';
import { capitaliser } from '../services/service';

export default function RoomsList() {
  const { roomsList } = useRoomsList();

  const getBorderColor = (id) => {
    if (id % 4 === 0) return 'blue';
    if (id % 4 === 1) return 'green';
    if (id % 4 === 2) return 'yellow';
    if (id % 4 === 3) return 'red';
  };

  const updatedRoomsList = roomsList.map((room) => {
    const fullMessages = [...room.messages];

    const updatedRoom = {
      ...room,
      messages: fullMessages.filter(mes => mes.owner !== null),
    }
    return updatedRoom;
  });


  return (
    <div className="rooms">
      {updatedRoomsList.map((room, index) => {
        const { _id, name, messages } = room;
        const borderColor = getBorderColor(index);
        const roomClassName = `room room-${borderColor}`;
        const messageName = messages.length === '1' ? 'message' : 'messages';

        return (
          <div key={_id} className={roomClassName}>
            <Link to={`/rooms/${name}`} className="room-link">
              <div className="room-image">
                <div className="room-placeholder">
                  <img
                    src={`/images/rooms/${name}.webp`}
                    alt="Room Image"
                  />
                </div>
              </div>
              <div className="room-name">{capitaliser(name)}</div>
              <div className="room-capacity">
                {messages.length} {messageName}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
