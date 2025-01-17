// models/userModel.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  country: {
    type: String,
    required: [true, "Please provide country"],
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
