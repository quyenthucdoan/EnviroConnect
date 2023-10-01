import mongoose from "mongoose";
const { Schema } = mongoose;

const locationSchema = mongoose.Schema({
  lat: Number,
  long: Number,
});

const activitySchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  name: String,
  startDate: Date,
  endDate: Date,
  description: String,
  address: String,
  location: locationSchema,
  organizerID: Schema.ObjectId,
});

const Activity = mongoose.model("activity", activitySchema);

export default Activity;
