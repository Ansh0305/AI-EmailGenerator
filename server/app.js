const express = require("express");
const app = express();

const emailRouter = require("./routes/emailRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api", emailRouter);

module.exports = app;
