const expressAsynHandler = require("express-async-handler");
const User = require("../../model/User");



const registerUser = expressAsynHandler(async (req, res)=>{
    const {email, firstname, lastname, password} = req?.body;
    //check if user exits
    const userExists = await User.findOne({email});
     if(userExists) throw new Error("User already Exists"); 
    try {
        const user = await User.create({email, firstname, lastname, password});
        res.status(200).json(user);
    } catch (error) {
        res.json(error);
    }
});


//fetch all users

const fetchUsersCtrl = expressAsynHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
       res.json(error); 
    }
});


module.exports = {registerUser,fetchUsersCtrl};