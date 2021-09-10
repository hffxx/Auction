import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts.js";
const app = express();

app.use("/posts", router);

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://hoffix123:lolz123@cluster0.jdu9c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.port || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((err) => console.log(err.message));
