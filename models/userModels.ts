import mongoose, { model, models } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  image: {
    required: true,
    type: String,
    default: "",
  },
  about: {
    type: String,
    default: "",
  },

  socials: {
    github: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },
    twiiter: {
      type: String,
      default: "",
    },
    facebook: {
      type: String,
      default: "",
    },
  },
  followers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});
const User = models.User || model("User", userSchema);
export default User;
