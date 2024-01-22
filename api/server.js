import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv"; //to secure littlebit with dot env
import connectDB from "./config/db.js";
import authRoute from './routes/authRoute.js'
import cors from 'cors'

//configure env
dotenv.config();

//database config
connectDB();

//ports
const Host = process.env.host;
const Port = process.env.port;

//rest object
const app = express();

// middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

//routes

app.use("/api/v1/auth",authRoute)

app.get("/", (req, res) => {
  res.send({
    message: "Welocme to Ecomm app",
  });
});

app.listen(Port, () => {
  console.log(` the server is started on ${Host}:${Port} `.bgWhite.black);
});
