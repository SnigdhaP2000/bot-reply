import express from "express";
import botRoutes from "./src/routes/botRoutes";

const app = express();

app.use(express.json());

app.use("/api/bot", botRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});