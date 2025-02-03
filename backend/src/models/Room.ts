import { Schema, model } from "mongoose";

const roomSchema = new Schema(
  {
    _id: {
      type: String,
    },
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    capacity: {
      type: String,
      require: false,
    },
    messages: [
      {
        _id: {
          type: String,
        },
        owner: {
          type: String,
          require: true,
        },
        message: {
          type: String,
          require: true,
        },
      },
    ],
  },

  { collection: "Rooms" }
);

const Room = model("Room", roomSchema);

export default Room;
