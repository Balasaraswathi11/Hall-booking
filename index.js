import express from "express";
import cors from "cors";
import roomRouter from "./Router/Hallbooking.router.js";

const app = express();
app.use(cors());
app.use(express.json()); 

const port = 5000;

app.use("/api/room", roomRouter);

app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
