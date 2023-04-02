// import express from "express"; //ES6
const express = require('express'); // CJS
const app = express();
const dbConnection = require('./dbConnection');
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const requestLogger = require("./utils/requestLogger");
const errorHandler = require("./utils/errorHandler");

const PORT = 4000;
app.use(express.json());

app.use(requestLogger);
app.use('/test-api',router);
app.use('/user',userRouter);
app.use(errorHandler)

app.listen(PORT, () => {
    console.clear();
    console.log("server started on port", PORT)
});
