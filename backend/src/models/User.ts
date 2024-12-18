import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: String,
  password: String,
  },
  { collection: 'Users' });

const User = model("User", userSchema);

export default User;