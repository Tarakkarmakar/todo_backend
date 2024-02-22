import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/todoRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

app.use(cors());
app.use(express.json());

app.use("/todo", router);

app.use("/", (req, res) => {
  res.send("It's connected");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
