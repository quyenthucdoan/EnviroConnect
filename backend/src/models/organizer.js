import mongoose from "mongoose";
const { Schema } = mongoose;

const organizerSchema = new Schema({
  organizerID: String,
  name: String,
  email: String,
  description: String,
  activity: [{ type: Schema.Types.ObjectId, ref: "activity" }],
});

const Organizer = mongoose.model("organizer", organizerSchema);

export default Organizer;
