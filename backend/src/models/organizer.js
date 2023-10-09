import mongoose from "mongoose";

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const organizerSchema = new Schema({
  organizerID: String,
  name: String,
  email: String,
  description: String,
  activity: [{ type: ObjectId, ref: "activity" }],
});

const Organizer = mongoose.model("organizer", organizerSchema);

export default Organizer;
