import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?t=st=1710559893~exp=1710563493~hmac=27e1898544832854451b12a40f87d6aa1e1b9db3ad2a4e75226a7418676fde3e&w=740",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
