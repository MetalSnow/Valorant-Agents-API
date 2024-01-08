const express = require("express");
const app = express();
require("dotenv").config();
const agentsRoutes = require("./routes/agentsRoute");
const usersRoutes = require("./routes/usersRoute");
const errorHandler = require("./Middlewares/ErrorHandler");
const connectDB = require("./config/connectionDB");

const port = process.env.PORT || 2026;

connectDB();

app.use(express.json());
app.use("/api/valorant/agents", agentsRoutes);
app.use("/api/valorant/users", usersRoutes);
app.use(errorHandler);

app.get("/api/valorant", (req, res) => {
  res.status(200).json("Welcome To Valorant Agent Select");
});

app.listen(port, () => {
  console.log(`Server Running On Port: ${port}`);
});
