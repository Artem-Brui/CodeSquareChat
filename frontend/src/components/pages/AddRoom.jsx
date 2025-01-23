export default function AddRoom() {
  {
    return (
      <div className="rooms">
        <div className="room room-green">
          <div className="room-image">
            <div className="room-placeholder">
              <img
                src="../src/assets/images/placeholder-rooms.png"
                alt="Room Image"
              />
            </div>
          </div>
          <div className="room-name">Room Name 1</div>
          <div className="room-capacity">13/20</div>
        </div>

        <div className="room room-yellow">
          <div className="room-image">
            <div className="room-placeholder">
              <img
                src="../src/assets/images/placeholder-rooms.png"
                alt="Room Image"
              />
            </div>
          </div>
          <div className="room-name">Room Name</div>
          <div className="room-capacity">19/20</div>
        </div>

        <div className="room room-red">
          <div className="room-image">
            <div className="room-placeholder">
              <img
                src="../src/assets/images/placeholder-rooms.png"
                alt="Room Image"
              />
            </div>
          </div>
          <div className="room-name">Room Name</div>
          <div className="room-capacity">8/20</div>
        </div>

        <div className="room room-blue">
          <div className="room-image">
            <div className="room-placeholder">
              <img
                src="../src/assets/images/placeholder-rooms.png"
                alt="Room Image"
              />
            </div>
          </div>
          <div className="room-name">Room Name</div>
          <div className="room-capacity">15/20</div>
        </div>
      </div>
    );
  }
}
