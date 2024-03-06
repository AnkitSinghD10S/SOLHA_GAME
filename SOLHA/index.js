const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./src/routes/auth.route");
const userRoute = require("./src/routes/user.route");
const routes = require("./src/routes/route");

dotenv.config();

const app = express();

// Error Handler Middleware
app.use(express.json());

app.use((error, _, response, next) => {
  console.error(error);
  response.status(500).send({
    detail: "Unknown error occurred. Please contact an administrator",
  });
});

//Routes
app.use("/api", routes);

//Server
app.listen(process.env.SRV_PORT, async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Server started on port " + process.env.SRV_PORT);
});
