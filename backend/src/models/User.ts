import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  realName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  birthDate: {
    type: String,
    require: true,
  },
  isAdult: {
    type: Boolean,
    require: true,
  },
  isAcceptRules: {
    type: Boolean,
    require: true,
  },
  creatingDate: {
    type: String,
    default: new Date().toISOString(),
    require: true,
  },
  updatingDate: {
    type: String,
    default: new Date().toISOString(),
    require: true,
  },
  },
  { collection: 'Users' });

const User = model("User", userSchema);

export default User;