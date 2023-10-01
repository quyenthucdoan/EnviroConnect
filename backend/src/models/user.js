import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  userID: String, // String is shorthand for {type: String}
  name: String,
  email: String,
  address: String,
  location: {
    lat: Number,
    long: Number,
  },
  //   comments: [{ body: String, date: Date }],
  //   date: { type: Date, default: Date.now },
  //   hidden: Boolean,
  //   meta: {
  //     votes: Number,
  //     favs: Number,
  //   },
});

const User = mongoose.model("user", userSchema);

export default User;
