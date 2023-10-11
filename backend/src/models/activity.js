import mongoose from "mongoose";
const { Schema } = mongoose;

const locationSchema = new Schema({
  lat: Number,
  long: Number,
});

const activitySchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  name: String,
  image: String,
  currentPeople: Number,
  maximumPeople: Number,
  type: String,
  startDate: Date,
  endDate: Date,
  description: String,
  address: String,
  location: locationSchema,
  organizerID: { type: Schema.Types.ObjectId, ref: "organizer" },
  joinedUser: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const Activity = mongoose.model("activity", activitySchema);

export default Activity;
