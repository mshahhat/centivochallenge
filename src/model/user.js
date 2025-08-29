import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

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

userSchema.plugin(uniqueValidator);

export default mongoose.model("User", userSchema, "users");
