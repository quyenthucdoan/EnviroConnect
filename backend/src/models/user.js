import mongoose from "mongoose";
const { Schema } = mongoose;

const locationSchema = new Schema({
  lat: Number,
  long: Number,
});

const joinedActivitiesSchema = new Schema({
  activityId: { type: Schema.Types.ObjectId, ref: "activity" },
  joinDate: Date,
  status: Number, // 0: not completed; 1: completed
});

const buddySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const userSchema = new Schema({
  name: String,
  email: String,
  address: String,
  image: String,
  location: locationSchema,
  isOrganizer: Boolean,
  description: String,
  activities: [joinedActivitiesSchema],
  buddy: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  // notification: [],
});

const User = mongoose.model("user", userSchema);

export default User;
