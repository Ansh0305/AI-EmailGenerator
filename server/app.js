const express = require("express");
const app = express();

const cors = require("cors");

const { errorHandler } = require("./middlewares/errorMiddleware");
const { notFound } = require("./middlewares/notFoundMiddleware");

const emailRouter = require("./routes/emailRoutes");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", emailRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
