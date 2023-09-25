import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const DEFAULT_PORT = 9999;

app.use(cors());
app.use(bodyParser.text());
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get("/", (req, res) => {
  res.send("Server!!!!");
});

app.listen(DEFAULT_PORT, () => {
  console.log("App is listening on port ", DEFAULT_PORT);
});
