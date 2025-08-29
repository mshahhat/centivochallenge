import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    _id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema, "users");
