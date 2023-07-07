import mongoose, { model, models } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: "string",
  },
  email: {
    required: true,
    type: "string",
    unique: true,
  },
});
const User = models.User || model("User", userSchema);
export default User;
