const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersCtrl");
const usersRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");



const app = express();
//env
dotenv.config();
//middelware
app.use(express.json());

const logger = (req, res, next)=>{
    console.log("Am a logger");
    next();
};

app.use(logger);
//DB Connect
dbConnect();




//route
app.use("/api/users",usersRoute);


//error
app.use(notFound);
app.use(errorHandler);


module.exports = app;