const express = require("express");
const app = express();

const emailRouter = require('./routes/emailRoutes')

// Routes
app.use('/api', emailRouter);


module.exports = app;