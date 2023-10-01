import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./src/models/index.js";
import { DEFAULT_PORT } from "./src/configs/general.config.js";
import userRoute from "./src/routes/user.route.js";
import activityRoute from "./src/routes/activity.route.js";

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.text());
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(userRoute);
app.use(activityRoute);

app.get("/", (req, res) => {
  res.send("Server!!!!");
});

app.listen(DEFAULT_PORT, () => {
  console.log("App is listening on port ", DEFAULT_PORT);
});
