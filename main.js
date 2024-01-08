const express = require("express");
const cors = require("cors");
const agentsRoutes = require("./routes/agentsRoute");
const usersRoutes = require("./routes/usersRoute");
const errorHandler = require("./Middlewares/ErrorHandler");
const connectDB = require("./config/connectionDB");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 2026;

connectDB();

// Access to one website only!
var corsOptions = {
  origin: "http://example.com", //frontend website
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/valorant/agents", agentsRoutes);
app.use("/api/valorant/users", usersRoutes);
app.use(errorHandler);

app.get("/api/valorant", (req, res) => {
  res.status(200).json("Welcome To Valorant Agent Select");
});

app.listen(port, () => {
  console.log(`Server Running On Port: ${port}`);
});
