import mongoose from "mongoose";
const { Schema } = mongoose;

const locationSchema = new Schema({
  lat: Number,
  long: Number,
});

const joinedActivitiesSchema = new Schema({
  activityId: Schema.ObjectId,
  joinDate: Date,
  status: Number, // 0: not completed; 1: completed
});

const userSchema = new Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   // index: true,
  //   required: true,
  //   auto: true,
  // },
  name: String,
  email: String,
  address: String,
  location: locationSchema,
  isOrganizer: Boolean,
  activities: [joinedActivitiesSchema],
});

const User = mongoose.model("User", userSchema);

export default User;
