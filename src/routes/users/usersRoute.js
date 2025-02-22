const express = require("express");
const { registerUser,fetchUsersCtrl } = require("../../controllers/users/usersCtrl");

const usersRoute = express.Router();
usersRoute.post("/register", registerUser);
usersRoute.get("/",fetchUsersCtrl);

module.exports = usersRoute;